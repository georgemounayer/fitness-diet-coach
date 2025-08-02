export default function Signup() {
  return (
    <div>
      <h1>Registrering</h1>
      <form>
        <input type="email" placeholder="E-post" />
        <input type="password" placeholder="Lösenord" />
        <button type="submit">Skapa konto</button>
      </form>
    </div>
  );
}
