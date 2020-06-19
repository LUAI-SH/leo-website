/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5ee4900cadd438d39a2b4ec5").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class ChatAppWebsiteView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ChatAppWebsiteController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ChatAppWebsiteView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    scripts.concat(Promise.resolve()).reduce((loaded, loading) => {
      return loaded.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return loading
      })
    })
  }

  render() {
    const proxies = Controller !== ChatAppWebsiteView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/leo-website-new.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div data-collapse="small" data-animation="over-right" data-duration={400} data-easing="ease-in" data-easing2="ease-out" data-w-id="47fbcf49-5b35-c091-2786-d25012d45394" role="banner" className="af-class-navbar w-nav">
              <div data-w-id="e5b5de68-015c-813d-f6cb-3358a9afab79" className="af-class-navbar">
                <div className="af-class-nav-wrapper">
                  <a href="#" data-w-id="47fbcf49-5b35-c091-2786-d25012d45396" className="af-class-brand w-nav-brand">
                    <div data-w-id="a83d4ec5-16f1-86d3-c406-0a632739efee" data-animation-type="lottie" data-src="documents/leo-logo-lottie-.json" data-loop={0} data-direction={1} data-autoplay={0} data-is-ix2-target={1} data-renderer="svg" data-default-duration="1.3333333333333333" data-duration={0} data-ix2-initial-state={0} className="af-class-lottie-animation-3" />
                  </a>
                  <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                    <a data-w-id="a4ed8b1a-6d2a-7a3a-df6a-1d7569131b5d" href="#my-work" className="af-class-link-block w-inline-block">
                      <div className="af-class-nav-item">see my work</div>
                      <div className="af-class-link-hover" />
                    </a>
                    <a data-w-id="93267927-f83b-ea0f-6018-23b981281db3" href="#footer" className="af-class-link-block w-inline-block">
                      <div className="af-class-nav-item">get in touch</div>
                      <div className="af-class-link-hover" />
                    </a>
                  </nav>
                  <div className="af-class-menu-button w-nav-button">
                    <div data-w-id="1686c501-3118-6005-8281-86ad3f025792" data-animation-type="lottie" data-src="documents/menu_icon.json" data-loop={0} data-direction={1} data-autoplay={0} data-is-ix2-target={1} data-renderer="svg" data-default-duration="2.7" data-duration={0} className="af-class-lottie-animation-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-nav-bg" />
            <div className="af-class-header">
              <div className="af-class-header-wrapper">
                <div className="af-class-container-3 af-class-center">
                  <h6 className="af-class-h6">project showcase</h6>
                  <h1 className="af-class-h2">Chat App website<br /></h1>
                  <p className="af-class-p af-class-padding">This is a homepage design and build for a concept project – a chat application. I designed the page first then built a responsive web page using Webflow.<br /></p><a href="https://chat-app-homepage.webflow.io" target="_blank" className="af-class-live-site-link">visit live site →</a></div>
              </div>
            </div>
            <div className="af-class-section-2">
              <div className="af-class-screen-container"><img src="images/5e1e0172db1e6ffd76507c1d_chat-app-min.jpg" srcSet="images/5e1e0172db1e6ffd76507c1d_chat-app-min-p-500.jpeg 500w, images/5e1e0172db1e6ffd76507c1d_chat-app-min-p-800.jpeg 800w, images/5e1e0172db1e6ffd76507c1d_chat-app-min-p-1080.jpeg 1080w, images/5e1e0172db1e6ffd76507c1d_chat-app-min.jpg 1392w" sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 87vw, (max-width: 1439px) 83vw, 928px" alt className="af-class-screen-image" /></div>
            </div>
            <div id="footer" className="af-class-footer">
              <div className="af-class-container af-class-_8">
                <div className="af-class-what-i-do-wrapper">
                  <h2 className="af-class-h2">Want to work?</h2>
                  <div className="af-class-div-block-3">
                    <p className="af-class-p">If you need a modern and powerful website for your business, startup or yourself, I am available for work. You can email me directly at <a href="mailto:hello@leosaif.com" className="af-class-link"><span className="af-class-email">hello@leosaif.com</span></a>.</p>
                  </div>
                </div>
                <div className="af-class-copyright">© All rights reserved – Luai Saif</div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default ChatAppWebsiteView

/* eslint-enable */