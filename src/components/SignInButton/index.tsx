import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, useSession, signOut } from "next-auth/react";

import styles from "./styles.module.scss";

export function SignInButton() {
  const { data: session, status } = useSession()

  console.log(session);

  return session ? (
    <button type="button" onClick={() => signOut()} className={styles.signInButton}>
      <FaGithub color="#04d361" />
      <>{session.user.name}</>
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" onClick={() => signIn('github')} className={styles.signInButton}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
