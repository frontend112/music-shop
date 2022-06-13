import Link from 'next/link';
export default function Registration() {
  return (
    <>
      <h1>Registration page</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <form>
        <label htmlFor="name">name</label>
        <input required type="text" id="name" placeholder="John"></input>

        <label htmlFor="surname">surname</label>
        <input required type="text" id="surname" placeholder="Smith"></input>

        <label htmlFor="age">age</label>
        <input required type="number" id="age"></input>

        <select name="gender">
          <option value="female">female</option>
          <option value="male">male</option>
        </select>

        <label htmlFor="country">country</label>
        <input required type="text" placeholder="Poland" id="country"></input>

        <label htmlFor="nick">nick</label>
        <input type="text" id="nick"></input>

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email"></input>

        <label htmlFor="music">music genre</label>
        <input type="text" id="music"></input>

        <input type="checkbox" required id="statue"></input>
        <label htmlFor="statue">akceptuję regulamin</label>
        <a href="#">treść regulaminu</a>

        <input type="submit" value="send"></input>
      </form>
    </>
  );
}
