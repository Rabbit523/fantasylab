import React from 'react'
import { Button, Dimmer, Checkbox, Form, Grid, Header, Loader, Message, Segment } from 'semantic-ui-react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { Translate, withLocalize } from "react-localize-redux"
import ReeValidate from 'ree-validate'
import PageMetaTag from '../../common/pageMetaTag'
import Http from '../../Http'

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.validator = new ReeValidate({
			name: 'required|min:3',
			email: 'required|email',
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
			phone: '',
			checked: false,
			checkbox_border: true,
			isAuthenticated: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
	}

	handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		const { errors } = this.validator;
		const { credentials } = this.state;
		credentials[name] = value;
		if (name != 'phone') {
			this.validator.validate(name, value)
				.then(() => {
					this.setState({ errors, credentials })
				});
		} else {
			this.setState({ phone: value });
		}
	}

	handleCheckBoxClick() {
		this.setState({ checked: !this.state.checked, checkbox_border: !this.state.checked });
	}

	handleSubmit(event) {
		event.preventDefault();

		const { credentials, phone, checked } = this.state;

		this.validator.validateAll(credentials)
			.then(success => {
				if (success) {
					// Manually verify the password confirmation fields
					if (this.passwordConfirmation(credentials)) {
						// if (isValidPhoneNumber(phone)) {
						// if (checked) {
						// 	this.setState({
						// 		isLoading: true
						// 	});
						// 		credentials.phone = phone;
						// 		this.submit(credentials);
						// 	} else {
						// 		this.setState({ checkbox_border: !this.state.checkbox_border });
						// 	}
						// }
						// else {
						// 	const responseError = {
						// 		isError: true,
						// 		code: 401,
						// 		text: "Oops! Phone number doesn't exit!"
						// 	};
						// 	this.setState({ responseError });
						// }
						if (checked) {
							credentials.phone = phone;
							this.setState({
								isLoading: true
							});
							this.submit(credentials);
						} else {
							this.setState({ checkbox_border: !this.state.checkbox_border });
						}
					}
					else {
						const responseError = {
							isError: true,
							code: 401,
							text: "Oops! Password confirmation didn't match"
						};
						this.setState({ responseError });
					}
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
						password_confirmation: ''
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
		} else if (lang == 'nb' && typeof window != 'undefined') {
			if (!window.location.pathname.includes('no')) {
				return (<Redirect to='/no/start-prosjekt' />);
			}
		}

		const { errors, checkbox_border } = this.state;
		return (
			<React.Fragment>
				<PageMetaTag meta_title="Sign up" meta_description="" />
				<Translate>
					{({ translate }) => (
						<React.Fragment>
							<Segment className='page-loader' style={{ display: this.state.isLoading ? 'block' : 'none' }}>
								<Dimmer active inverted>
									<Loader size='large'>{translate('alert.registering')}</Loader>
								</Dimmer>
							</Segment>

							<Grid textAlign='center' verticalAlign='middle' className='login-page register' >
								<Grid.Column className="login-responsive">
									<div className='login_title'>
										<h2>{translate('register.create-account')}</h2>
										<Link to='/login' replace><h3>{translate('register.login-account')}</h3></Link>
									</div>
									{this.state.responseError.isError && <Message negative>
										<Message.Content>
											{this.state.responseError.text}
										</Message.Content>
									</Message>}
									{this.state.isSuccess && <Message positive>
										<Message.Content>
											{translate('alert.register-success')}<Link to='/login' replace>{translate('navigation.login')}</Link> {translate('register.here')}
										</Message.Content>
									</Message>}
									<Form size='large' className='login-form register'>
										<Segment stacked>
											<Form.Input
												fluid
												label={translate('contact.name')}
												name='name'
												placeholder={translate('contact.name')}
												onChange={this.handleChange}
											/>
											{errors.has('name') && <Header size='tiny' className='custom-error' color='red'>
												{errors.first('name')}
											</Header>}
											<Form.Input
												fluid
												label={translate('contact.email-address')}
												name='email'
												placeholder={translate('contact.email-address')}
												onChange={this.handleChange}
												error={errors.has('email')}
											/>
											{errors.has('email') && <Header size='tiny' className='custom-error' color='red'>
												{errors.first('email')}
											</Header>}
											<Form.Input
												fluid
												label={translate('login.password')}
												name='password'
												placeholder={translate('login.password')}
												type='password'
												onChange={this.handleChange}
												error={errors.has('password')}
											/>
											{errors.has('password') && <Header size='tiny' className='custom-error' color='red'>
												{errors.first('password')}
											</Header>}
											<Form.Input
												fluid
												label={translate('register.confirm-password')}
												name='password_confirmation'
												placeholder={translate('register.confirm-password')}
												type='password'
												onChange={this.handleChange}
												error={errors.has('password_confirmation')}
											/>
											{errors.has('password_confirmation') &&
												<Header size='tiny' className='custom-error' color='red'>
													{errors.first('password_confirmation')}
												</Header>}
											<Form.Input label={translate('contact.phone')} name='phone' placeholder={translate('contact.phone')} className='input-form' onChange={(val) => this.handleChange(val, 'phone')} error={errors.has('phone')} />
											{errors.has('phone') && <Header size='tiny' className='custom-error' color='red'>{errors.first('phone')}</Header>}
											<Form.Input
												fluid
												label={translate('register.team-name')}
												name='team'
												placeholder={translate('register.team-placeholder')}
												type='text'
												onChange={this.handleChange}
											/>
											<div className={checkbox_border ? 'privacy-section' : 'privacy-section checkbox_border'}>
												<Checkbox onClick={this.handleCheckBoxClick} label={translate('register.clicking-agree')} />
												<div className='terms-section'>
													<Link to='/terms-service' replace>{translate('register.terms')}</Link> <span>{translate('register.and')}</span> <Link to='/privacy-policy' replace>{translate('register.privacy')}</Link>
												</div>
											</div>
											<Button fluid size='large' className='primary-button' onClick={this.handleSubmit}>{translate('register.btn-create-account')}</Button>
											<Button onClick={this.onSocialClick.bind(this)} service='google' className='ui google icon button google-button'>
												<img src='/images/google.png' /> {translate('register.signup-google')}
											</Button>
										</Segment>
									</Form>
								</Grid.Column>
							</Grid>
						</React.Fragment>
					)}
				</Translate>
			</React.Fragment>
		);
	}
}

export default withLocalize(withRouter(Page));
