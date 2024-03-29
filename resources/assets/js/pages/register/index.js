import React from 'react'
import { Button, Dimmer, Checkbox, Form, Grid, Header, Loader, Message, Segment } from 'semantic-ui-react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { withLocalize } from "react-localize-redux"
import IntlTelInput from 'react-intl-tel-input'
import 'react-intl-tel-input/dist/main.css'
import ReeValidate from 'ree-validate'
import PageMetaTag from '../../common/pageMetaTag'
import Http from '../../Http'

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.validator = new ReeValidate({
			name: 'required|min:3',
			email: 'required|email',
			phone: 'required',
			password: 'required|min:6',
			password_confirmation: 'required|min:6',
			team: 'required'
		});
		this.state = {
			credentials: {
				name: '',
				email: '',
				password: '',
				password_confirmation: '',
				team: '',
				phone: ''
			},
			responseError: {
				isError: false,
				code: '',
				text: ''
			},
			isSuccess: false,
			isLoading: false,
			errors: this.validator.errors,
			phone_error: false,
			checked: false,
			checkbox_border: true,
			isAuthenticated: false
		};
		this.myRef = React.createRef();
		this.handler = this.handler.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
	}

	handler() {
		var { credentials } = this.state;
		credentials.phone = this.myRef.current.formatFullNumber(event.target.value);
		this.setState({ credentials });
	}
	
	onBlur() {
		var { credentials } = this.state;
		if (this.myRef.current.isValidNumber(credentials.phone)) {
			this.setState({ phone_error: false });
		}
	}

	handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		const { errors } = this.validator;
		const { credentials } = this.state;
		credentials[name] = value;

		this.validator.validate(name, value)
		.then(() => {
			if (errors.items.length == 0) {
				this.setState({ errors })
				
				$('input[name=' + type + ']').addClass('success');

			} else {
				this.setState({ errors })
				$('input[name=' + type + ']').removeClass('success');
			}
		});
	}

	handleCheckBoxClick() {
		this.setState({ checked: !this.state.checked, checkbox_border: !this.state.checked });
	}

	handleSubmit(event) {
		event.preventDefault();

		const { credentials, checked } = this.state;
		const { errors } = this.validator;
		this.validator.validateAll(credentials)
			.then(success => {
				if (success) {
					// Manually verify the password confirmation fields
					if (this.passwordConfirmation(credentials)) {
						if (!checked || !this.myRef.current.isValidNumber(credentials.phone)) {
							if (!checked) {
								this.setState({ checkbox_border: !this.state.checkbox_border });
							} else {
								this.setState({ phone_error: true });
							}
						} else {
							this.submit(credentials);
						}
					} else {
						const responseError = {
							isError: true,
							code: 401,
							text: "Oops! Password confirmation didn't match"
						};
						this.setState({ responseError });
					}
				} else {
					const ref = this;
          if (!checked) {
            this.setState({ checkbox_border: !this.state.checkbox_border });
          }
          Object.keys(credentials).map((key, item) => {
            if (key != 'phone') {
              ref.validator.validate(key, credentials[key])
                .then(() => {
                  ref.setState({ errors })
                });
            } else {
              if (!this.myRef.current.isValidNumber(credentials.phone)) {
                ref.setState({ phone_error: true });
              }
            }
          });
				}
			});
	}

	passwordConfirmation(credentials) {
		if (credentials.password == credentials.password_confirmation) {
			return true;
		}
		else {
			return false;
		}
	}

	submit(credentials) {
		if (!window.location.origin) {
			window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
		}
		Http.post(`${window.location.origin}/api/auth/register`, credentials)
			.then(res => {
				this.setState({
					isLoading: false,
					isSuccess: true,
					credentials: {
						name: '',
						email: '',
						password: '',
						team: '',
						password: '',
						password_confirmation: '',
						phone: ''
					},
					responseError: {
						isError: false,
						code: '',
						text: ''
					}
				});
				this.props.history.push('/login');
			})
			.catch(err => {
				const statusCode = err.response.status;
				const data = {
					error: null,
					statusCode,
				};
				if (statusCode === 422) {
					Object.values(err.response.data.message).map((value, i) => {
						data.error = value
					});

				} else if (statusCode === 400) {
					data.error = err.response.data.message;
				}
				const responseError = {
					isError: true,
					code: statusCode,
					text: error
				};
				this.setState({ responseError });
				this.setState({
					isLoading: false
				});
				console.log(data);
			});
	}

	componentDidMount() {
		var isAuthenticated = false;
		if (typeof window !== 'undefined') {
			isAuthenticated = localStorage.getItem('isAuthenticated');
		}
		this.setState({ isLoading: false, isAuthenticated });
	}

	onSocialClick(event, data) {
		window.location.assign(`redirect/${data.service}`);
	}

	render() {
		const { isAuthenticated } = this.state;
		const lang = this.props.activeLanguage ? this.props.activeLanguage.code : 'en';

		if (isAuthenticated == 'true') {
			return (<Redirect to='/' />);
		}
		if (lang == 'nb' && typeof window != 'undefined') {
			if (!window.location.pathname.includes('no')) {
				this.props.setActiveLanguage('en');
			}
		} else if (lang == 'en' && typeof window != 'undefined') {
			if (window.location.pathname.includes('no')) {
				this.props.setActiveLanguage('nb');
			}
		}

		const { errors, checkbox_border, phone_error } = this.state;
		return (
			<React.Fragment>
				<PageMetaTag meta_title="Sign up" meta_description="" />
				<Segment className='page-loader' style={{ display: this.state.isLoading ? 'block' : 'none' }}>
					<Dimmer active inverted>
						<Loader size='large'>{lang=='en'?'Registering...':'Registrerer ...'}</Loader>
					</Dimmer>
				</Segment>

				<Grid textAlign='center' verticalAlign='middle' className='login-page register' >
					<Grid.Column className="login-responsive">
						<div className='login_title'>
							<h2>{lang == 'en' ? 'Create a FantasyLab account' : 'Opprett en FantasyLab-konto'}</h2>
							<Link to='/login' replace>
								<h3>{lang == 'en' ? 'or sign in into your account' : 'eller logg deg på kontoen din'}</h3>
							</Link>
						</div>
						{this.state.responseError.isError && <Message negative>
							<Message.Content>
								{this.state.responseError.text}
							</Message.Content>
						</Message>}
						{this.state.isSuccess && <Message positive>
							<Message.Content>
								{lang=='en'?'Registered Successfully!':'Registrert vellykket!'}<Link to='/login' replace>{translate('navigation.login')}</Link> {lang=='en'?'here':'her'}
							</Message.Content>
						</Message>}
						<Form size='large' className='login-form register'>
							<Segment stacked>
								<Form.Input
									fluid
									label={lang=='en'?'Name':'Navn'}
									name='name'
									placeholder={lang=='en'?'Your name here':'Navnet ditt her'}
									onChange={this.handleChange}
									error={errors.has('name')}
								/>
								{errors.has('name') && <Header size='tiny' className='custom-error' color='red'>
									{errors.first('name')?lang=='en'?'The name is required.':'Navnet er påkrevd.':''}
								</Header>}
								<Form.Input
									fluid
									label={lang=='en'?'Email':'E-post'}
									name='email'
									placeholder={lang=='en'?'Your email here':'Din e-post her'}
									onChange={this.handleChange}
									error={errors.has('email')}
								/>
								{errors.has('email') && <Header size='tiny' className='custom-error' color='red'>
									{errors.first('email')?lang=='en'?'The email is required.':'E-postadressen er påkrevd.':''}
								</Header>}
								<div className="form-group phone field">
									<label>{lang=='en'?'Phone':'Telefon'}</label>
									<IntlTelInput
										ref={this.myRef}
										defaultCountry={'no'}
										preferredCountries={['us', 'gb', 'fr', 'de', 'nl', 'se', 'no', 'ch', 'dk', 'fi', 'pl', 'it']}
										onPhoneNumberChange={this.handler}
										onPhoneNumberBlur={this.onBlur}
									/>
									{ errors.has('phone') && <Header size='tiny' className='custom-error' color='red'>{errors.first('phone')?lang=='en'?'The phone number is required.':'Telefonnummeret er påkrevd.':''}</Header>}
									{ !errors.has('phone') && phone_error && <Header size='tiny' className='custom-error' color='red'>{lang=='en'?'The phone number is invalid.':'Telefonnummeret er ugyldig.'}</Header>}
								</div>
								<Form.Input
									fluid
									label={lang=='en'?'Password':'Passord'}
									name='password'
									placeholder={lang=='en'?'Enter password':'Oppgi passord'}
									type='password'
									onChange={this.handleChange}
									error={errors.has('password')}
								/>
								{errors.has('password') && <Header size='tiny' className='custom-error' color='red'>
								{errors.first('password')?lang=='en'?'The password is required.':'Passordet er påkrevd.':''}
								</Header>}
								<Form.Input
									fluid
									label={lang=='en'?'Confirm password':'Bekreft passord'}
									name='password_confirmation'
									placeholder={lang=='en'?'Enter confirm password':'Angi bekreft passord'}
									type='password'
									onChange={this.handleChange}
									error={errors.has('password_confirmation')}
								/>
								{errors.has('password_confirmation') &&
									<Header size='tiny' className='custom-error' color='red'>
										{errors.first('password_confirmation')?lang=='en'?'The confirmation password is required.':'Bekreftelsespassordet er påkrevd.':''}
									</Header>}
								<Form.Input
									fluid
									label={lang=='en'?'Team name':'Lag navn'}
									name='team'
									placeholder={lang=='en'?'Enter your team name here':'Hidden inn teamnavnet ditt her'}
									type='text'
									onChange={this.handleChange}
									error={errors.has('team')}
								/>
								{errors.has('team') &&
									<Header size='tiny' className='custom-error' color='red'>
										{errors.first('team')?lang=='en'?'The team name is required.':'Lagnavnet kreves.':''}
									</Header>}
								<div className={checkbox_border ? 'privacy-section' : 'privacy-section checkbox_border'}>
									<Checkbox onClick={this.handleCheckBoxClick} label={lang=='en'?'By creating an account, I agree to our ':'Ved å opprette en konto, godtar jeg vår '} />
									<div className='terms-section'>
										<Link to='/terms-service' replace>{lang=='en'?'Terms':'Vilkår'}</Link> <span>{lang=='en'?'and':'og'}</span> <Link to='/privacy-policy' replace>{lang=='en'?'Privacy':'Personvern'}</Link>
									</div>
								</div>
								<Button fluid size='large' className='primary-button' onClick={this.handleSubmit}>{lang=='en'?'Create account':'Opprett konto'}</Button>
								<Button onClick={this.onSocialClick.bind(this)} service='google' className='ui google icon button google-button'>
									<img src='/images/google.png' /> {lang=='en'?'Sign up with Google':'Registrer deg med Google'}
								</Button>
							</Segment>
						</Form>
					</Grid.Column>
				</Grid>
			</React.Fragment>
		);
	}
}

export default withLocalize(withRouter(Page));
