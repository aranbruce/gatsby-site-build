import React from "react"
import Layout from "../layouts/layout"
import Section from "../components/section/section"
import TextColumn from "../components/textColumn/textColumn"

const pageMetaData = {
  title: "Cookies",
  description: "Page describing the site's cookie policy",
  URL: "https://www.aranbc.com/cookies/",
}

const CookiesPage = () => {
  return (
    <div>
      <Layout
        pageTitle={pageMetaData.title}
        pageDescription={pageMetaData.description}
        pageURL={pageMetaData.URL}
      >
        <Section hero background="blueSmall">
          <h1>Cookies</h1>
        </Section>
        <Section color="greyGradient">
          <TextColumn>
            <h5>Effective June 2019</h5>
            <p>
              This website respects your privacy, and protecting your
              information is very important to us. Please read this Cookie
              Policy carefully before using our website or registering to use
              our services. That way, we hope you’ll understand our views and
              practices around your personal information, and how we will treat
              it. This Cookie Policy explains exactly how we’ll process any of
              your personal data.
            </p>
            <p>
              By visiting aranbc.com you are accepting and consenting to the
              points described in this Cookie Policy.
            </p>
          </TextColumn>
          <TextColumn>
            <h5>Introduction</h5>
            <p>
              This website uses cookies for a variety of reasons, including
              making sure that our website works as expected, remembering your
              preferences, and gathering data on the users of our website and
              our services.
            </p>

            <p>
              By using our website (through any device) you consent to this
              Cookie Policy.
            </p>
            <p>
              We are committed to protecting you and any information that we
              collect about you online (whether it’s anonymous or not). This
              section tells you about how and why we use cookies, and how this
              allows us to improve our service.
            </p>
            <p>
              If you want to use our website, but don’t want us to set cookies
              in your browser, you can disable or remove the cookies. You can
              find out how to do this in section 5 below. Please bear in mind
              that disabling or removing cookies may impact the performance of
              our website, and our ability to provide our full services to you.
            </p>
            <p>
              We reserve the right to make changes to our Cookies Policy. Any
              changes we may make to our Cookies Policy in the future will be
              posted on this page and, when necessary, we may tell you about
              important policy changes via email. Please check back frequently
              to see whether there are any updates or changes to our Cookies
              Policy. If you continue to use our website, we will take that as
              your agreement to any of those changes.
            </p>
          </TextColumn>
          <TextColumn>
            <h5>About Cookies</h5>
            <p>
              Cookies are files containing small amounts of information which
              are downloaded to your device when you visit a website. Your web
              browser (like Internet Explorer, Mozilla Firefox, Google Chrome or
              Safari) then sends these cookies back to our website [or
              application] on each subsequent visit. Cookies do not contain any
              information that personally identifies you.
            </p>
            <p>
              We and our third party service providers use the information we
              get about you through the use of cookies to recognise your
              device(s) when you visit our website, to remember if you’ve set
              any preferences on our website, to temporarily store data – for
              example, this may be used as part of customer surveys, to test new
              content and assess its performance, to remember if you’ve been
              informed of our Cookie Policy, to track you as you use our website
              (we do this to track page usage, and see what paths have been used
              by visitors on our website; we also track the use of our Internet
              banner advertisements and other links from our marketing partners’
              websites), to improve our website’s usability, to allow you to
              share pages with social networks such as LinkedIn, Facebook and
              Twitter, and to support social media components, like Facebook or
              Twitter (where our website uses a plugin from these third party
              platforms), to make sure you don’t miss information that’s
              relevant to you (we target information to our users, such as
              website content, marketing campaigns, direct marketing emails, and
              Internet banner advertisements on our website and other websites),
              to analyse use of our website (we do this for statistical
              analysis, sales and marketing research).
            </p>
            <p>
              To stop us setting these cookies you will need to set up your
              browser to reject all cookies (see more below).
            </p>
            <p>
              We may also combine this web usage data with other information we
              have collected about you. We store this information so that we can
              have a better and more specific understanding of the way people
              are using our website, and their preferences and interests.
            </p>
            <p>
              Cookies may be either “persistent” cookies or “session” cookies,
              depending on how long they are used.
            </p>
            <p>
              Persistent cookies stay on your device after you have closed your
              browser, and allow a website to remember your actions and
              preferences. They are activated every time you visit the website
              where the cookie was generated. Sometimes persistent cookies are
              used by websites to provide targeted advertising based on your
              browsing history. They are stored by the browser and remain valid
              until their set expiry date (unless you delete the cookie before
              its expiry date).
            </p>
            <p>
              Session cookies only last as long as you’re on the website, and
              they’re deleted when you close your browser. They help us keep
              track of things like how a particular device is navigating from
              page to page. This supports the website’s security or basic
              functionality.
            </p>
            <p>
              Many of the cookies we use are session cookies. For example, they
              help us to ensure that your session is secure, and allow you to
              stay signed in to your Koodoo Financial Limited account while you
              move between pages.
            </p>
          </TextColumn>
          <TextColumn>
            <h5>About the Cookies We Use</h5>
            <p>
              Whether a cookie is a first or third party cookie depends on which
              website the cookie comes from. First party cookies are set by (or
              on behalf of) the website you’re visiting. All other cookies are
              third party cookies. We use both first party and third party
              cookies. You can read more about them below.
            </p>
            <p>
              Third party cookies: In some cases, third parties manage some of
              our cookies for us – but we never allow them to use the cookies
              for any purpose other than those listed above.
            </p>
            <p>
              Strictly necessary cookies: These cookies are required for our
              website to operate. For example, they may include cookies that let
              you to log into secure areas of our website (such as your Koodoo
              account).
            </p>
            <p>
              Performance cookies: These cookies allow us to recognise and count
              the number of visitors to our site, and to seehowthey move around
              our website when they are using it. This helps us improve the way
              our website works, for example, by ensuring that users are finding
              what they are looking for easily.
            </p>
            <p>
              Functionality cookies: These cookies are used to recognise you
              when you return to our website. This lets us personalise our
              content for you, greet you by name, and remember your preferences
              (for example, your choice of language or region).
            </p>
            <p>
              Analytics cookies: In order to keep our products and services easy
              to use and up-to-date, we use web analytics services to help us
              understand how people use our website. For example, we can see
              which parts of our services are most popular, identify when errors
              occur, and test different versions of a feature to see which one
              works best. These web analytics services may be designed and
              operated by other companies on our behalf. They do this using
              small invisible images known as “web beacons” or “tracking pixels”
              that may be included in the digital products and services on our
              website. For example, these may be used to count the number of
              times something has been seen. The web beacons are anonymous and
              do not contain or collect any information that identifies you.
            </p>
            <p>
              Targeting cookies: These cookies record your visit to our website,
              the pages you have visited, and the links you have followed. We
              use this information to make what you see more relevant to your
              interests: from pages on our website to advertising you may be
              interested in. We may also share this information with third
              parties for this purpose. We use retargeting and online
              behavioural advertising to market Koodoo – this kind of
              advertising uses targeting cookies to deliver you more targeted
              advertising.
            </p>
            <p>
              By using our website, you agree that we can place the above types
              of cookies on your device.
            </p>
          </TextColumn>
          <TextColumn>
            <h5>Cookies We Use</h5>
            <p>This website uses the following cookies:</p>
            <p>
              <strong>Google Analytics </strong>: This is a third party cookie
              used to track visitors, and collect information about how visitors
              use our site. We use the information to compile reports and to
              help us improve the site. No personally identifiable information
              is stored. The cookies collect information in an anonymous form,
              including the number of visitors to the site, where visitors have
              come to the website from, and the pages they visited.
            </p>
          </TextColumn>
          <TextColumn>
            <h5>Turning Off Cookies</h5>
            <p>
              In most browsers, you can choose to reject cookies and/or turn off
              tracking features, and we provide instructions on how to do this
              below. However, please note that by doing so, parts of our website
              may no longer function expected. For example, if you delete
              cookies, any preferences they record will be lost. This includes,
              for example, where you have opted out from cookies, as this
              requires an opt-out cookie to be set.
            </p>
            <p>
              If you’re mainly concerned about third party cookies, then we
              recommend you just reject those cookies, rather than all cookies.
              That way, we can still provide you with the functionality you
              expect.
            </p>
            <p>
              If you do wish to stop your browser from accepting cookies, see
              the following pages:
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
              >
                Mozilla Firefox
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={
                  "https://support.google.com/chrome/answer/95647?hl=en&p=cpn_cookies"
                }
              >
                Google Chrome
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://windows.microsoft.com/en-us/windows-vista/block-or-allow-cookies"
              >
                Internet Explorer
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://support.apple.com/kb/Ph5.no-margin-bottom042"
              >
                Safari
              </a>
            </p>
          </TextColumn>
          <TextColumn>
            <h5>Further Reading</h5>
            <p>
              Information on the ICO cookie guide can be found on the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ico.org.uk/media/for-organisations/documents/1545/cookies_guidance.pdf"
              >
                ICO website
              </a>
              .
            </p>
          </TextColumn>
        </Section>
      </Layout>
    </div>
  )
}

export default CookiesPage
