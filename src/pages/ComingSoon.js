export const ComingSoon = () => {
  return (
    <section className="comming-soon">
      <div className="comming-soon-left">
        <div className="cngs-content">
          <h1>Coming Soon</h1>
          <p>
            Donec bibendum enim ut elit porta ullamcorper. Vestibulum Naiquam
            nulla, venenatis eget dapibus catali topuny wekemdini iaculis vitae
            nulla.
          </p>
          <div id="timer"></div>
          <div className="subscribe-mail">
            <form action="#" method="post">
              <input type="email" name="email" placeholder="Email Address" />
              <input type="submit" value="Send Now" />
            </form>
          </div>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="comming-soon-right">
        <img src="img/commingsoon.jpg" alt="" />
      </div>
    </section>
  );
};
