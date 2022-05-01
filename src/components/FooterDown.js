import { Ancoras } from "./Ancoras";
import "./FooterDown.style.css";
export const FooterDown = () => {
  return (
    <div className="footerDown">
      <div className="">
        <Ancoras
          ancora="Terms of Use"
          target="_self"
          href="https://disneytermsofuse.com"
        />
        <Ancoras
          ancora="Privacy
          Policy"
          target="_self"
          href="https://privacy.thewaltdisneycompany.com/en"
        />
        <Ancoras
          ancora="Your
          California
          Privacy
          Rights"
          target="_self"
          href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-california-privacy-rights"
        />
        <Ancoras
          ancora="Do
          Not
          Sell
          My
          Personal
          Information"
          target="_self"
          rel="noopener noreferrer"
          href="https://privacy.thewaltdisneycompany.com/en/dnsmi/"
        />
        <Ancoras
          ancora="Children 's Online Privacy Policy"
          target="_self"
          href="https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy"
        />
        <Ancoras
          ancora="License Agreement"
          target="_self"
          href="https://www.marvel.com/corporate/license_tou"
        />
        <Ancoras
          ancora="Interest-Based Ads"
          target="_self"
          href="http://preferences-mgr.truste.com/?pid=disney01&amp;aid=marvel01&amp;type=marvel"
        />
        <Ancoras
          ancora="Marvel Insider Terms"
          target="_self"
          href="https://www.marvel.com/corporate/insider_terms"
        />
        <Ancoras
          ancora="©2022 MARVEL"
          target="_self"
          href="https://www.marvel.com/corporate/insider_terms"
        />
      </div>
    </div>
  );
};
