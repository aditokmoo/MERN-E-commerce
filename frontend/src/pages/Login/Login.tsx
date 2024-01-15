import { useState } from 'react';
import { useLogin } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
// React icons
import { MdOutlineArrowBack } from 'react-icons/md';
// SCSS
import styles from './Login.module.scss';

export default function Login() {
	const { mutate, isPending } = useLogin();
	const [ loginData, setLoginData ] = useState<{ email: string; password: string }>({
		email: '',
		password: ''
	});
	const { email, password } = loginData;

    function handleInputChange(value: string, id: string) {
        setLoginData((prevState) => ({ ...prevState, [id]: value }))
    }

	if(isPending) return <h2>Loading...</h2>

	return (
		<div className={styles.login}>
			<Link to="/" className={styles.backBtn}>
				<MdOutlineArrowBack />
			</Link>
			<div className={styles.leftSection}>
				<h2>Sign In</h2>
				<p>Welcome to the best web shop</p>
				<form onSubmit={(e) => {
                    e.preventDefault();
					mutate({email, password})
                }}>
					<div className={styles.formContainer}>
						<div className={styles.inputContainer}>
							<label htmlFor="email">Email *</label>
							<input type="email" id="email" className="email" autoComplete='off' onChange={(e) => handleInputChange(e.target.value, e.target.id)} />
						</div>
						<div className={styles.inputContainer}>
							<label htmlFor="password">Password *</label>
							<input type="password" id="password" className="password" autoComplete='off' onChange={(e) => handleInputChange(e.target.value, e.target.id)} />
						</div>
					</div>

					<div className={styles.formFooter}>
						<button>Sign In</button>
						<p>
							You already have account? <Link to="/user/register">Create account</Link>
						</p>
					</div>
				</form>
			</div>

			<div className={styles.rightSection} />
		</div>
	);
}