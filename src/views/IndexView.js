/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5ee4900cadd438d39a2b4ec5").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

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
    const proxies = Controller !== IndexView ? transformProxies(this.props.children) : {

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
            <div className="w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-clipped {\n    -webkit-text-fill-color: transparent;\n    -webkit-background-clip: text;\n" }} />
            </div>
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
            <div className="af-class-hero">
              <div className="af-class-container">
                <div className="af-class-h1-lottie-wrapper">
                  <div data-w-id="6b6e09d6-0030-9147-0997-6840c6f00b59" data-animation-type="lottie" data-src="documents/Leo-Header-Effect.json" data-loop={0} data-direction={1} data-autoplay={1} data-is-ix2-target={0} data-renderer="svg" data-default-duration="5.35" data-duration={0} className="af-class-lottie-animation-2" />
                </div>
                <div className="af-class-hero-content">
                  <div className="af-class-hero-p">
                    <p style={{WebkitTransform: 'translate3d(0, 15PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 15PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 15PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 15PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="af-class-p af-class-p-hero">Hi! 😀 My name is Leo. I'm a web designer and developer living in Melbourne, 🇦🇺.</p>
                    <p style={{WebkitTransform: 'translate3d(0, 15PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 15PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 15PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 15PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="af-class-p af-class-p-hero">I design and build beautiful websites for businesses around the globe. If you need a modern and powerful website, send me an email. If we are a good fit, I will give you a time and cost estimate.</p>
                  </div>
                  <div data-w-id="2adaccfc-49b5-fbdf-20bf-459040ec8892" style={{WebkitTransform: 'translate3d(0, 15PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 15PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 15PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 15PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="af-class-hero-button">
                    <div className="af-class-button-wrapper"><a href="#my-work" className="af-class-button w-button">see my work</a></div>
                  </div>
                </div>
                <div className="af-class-hero-image-wrapper"><img src="images/Hero-image.png" width={702} srcSet="images/Hero-image-p-500.png 500w, images/Hero-image-p-800.png 800w, images/Hero-image.png 802w" sizes="(max-width: 479px) 75vw, (max-width: 767px) 90vw, (max-width: 1919px) 40vw, 702px" data-w-id="41234e6c-29fa-63cf-9abb-c89b31f4317e" style={{WebkitTransform: 'translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} alt className="af-class-image" /></div>
              </div>
            </div>
            <div id="my-work" className="af-class-my-work">
              <div className="af-class-container af-class-my-work">
                <div className="af-class-last-work-left">
                  <h6 className="af-class-h6">latest work</h6>
                  <h2 className="af-class-h2">Team App website</h2>
                  <div className="af-class-tags-wrapper">
                    <div className="af-class-tags">Website Design</div>
                    <div className="af-class-tags">HTML</div>
                    <div className="af-class-tags">CSS</div>
                    <div className="af-class-tags">Concept</div>
                  </div>
                  <p className="af-class-p">Full website design &nbsp;and build for a concept team collaboration platform. This website also &nbsp;includes a beautiful blog. I have built the website and the blog in Webflow &nbsp;which has one of the best CMS for blog hosting.</p>
                  <div className="af-class-button-wrapper af-class-_2"><a href="team-app.html" target="_blank" className="af-class-button af-class-_2 w-button">see this project</a></div>
                </div>
                <div className="af-class-last-work-right">
                  <a href="team-app" target="_blank" className="af-class-link-block-3 w-inline-block">
                    <div className="af-class-text-block-2">see this project </div><img src="images/team_app.jpg" srcSet="images/team_app-p-500.jpeg 500w, images/team_app-p-800.jpeg 800w, images/team_app.jpg 900w" sizes="(max-width: 479px) 74vw, (max-width: 767px) 84vw, (max-width: 991px) 39vw, (max-width: 1439px) 36vw, 39vw" alt className="af-class-image-2" /></a>
                </div>
              </div>
              <div className="af-class-seprator-line-wrapper">
                <div className="af-class-div-block-5" />
              </div>
              <div className="af-class-container af-class-my-work af-class-_2">
                <div className="af-class-last-work-left">
                  <h6 className="af-class-h6">latest work</h6>
                  <h2 className="af-class-h2">Chat App website</h2>
                  <div className="af-class-tags-wrapper">
                    <div className="af-class-tags">Website Design</div>
                    <div className="af-class-tags">HTML</div>
                    <div className="af-class-tags">CSS</div>
                    <div className="af-class-tags">Concept</div>
                  </div>
                  <p className="af-class-p">This is a homepage design and build for a concept project – a chat application. I designed the page first then built a responsive web page using Webflow.<br /></p>
                  <div className="af-class-button-wrapper af-class-_2"><a href="chat-app-website.html" target="_blank" className="af-class-button af-class-_2 w-button">see this project</a></div>
                </div>
                <div className="af-class-last-work-right">
                  <a href="chat-app-website" target="_blank" className="af-class-link-block-3 w-inline-block">
                    <div className="af-class-text-block-2">see this project </div><img src="images/chat-app.jpg" srcSet="images/chat-app-p-500.jpeg 500w, images/chat-app-p-800.jpeg 800w, images/chat-app.jpg 816w" sizes="(max-width: 479px) 74vw, (max-width: 767px) 84vw, (max-width: 991px) 39vw, (max-width: 1439px) 36vw, 39vw" alt className="af-class-image-2" /></a>
                </div>
              </div>
            </div>
            <div className="af-class-statment">
              <div className="af-class-container af-class-_3">
                <div data-w-id="4507992f-a6db-28c5-e8cb-3f46e3694923" style={{opacity: 0}} className="af-class-statment-p1-wrapper">
                  <p className="af-class-statement-p">Having a website is <span className="af-class-text-span">fine,</span></p>
                </div>
                <div data-w-id="aa34f163-fef0-de67-fa73-8b129e2ada40" style={{opacity: 0}} className="af-class-statment-p2-wrapper">
                  <p className="af-class-statement-p af-class-right">but having a <span className="af-class-emf af-class-clipped">professional</span> looking site is <span className="af-class-text-span-2">much better!</span></p>
                </div>
              </div>
            </div>
            <div className="af-class-what-i-do">
              <div className="af-class-container af-class-_4">
                <div className="af-class-what-i-do-wrapper">
                  <h2 className="af-class-h2">What I do?</h2>
                  <div className="af-class-div-block-3">
                    <div className="af-class-title">Design</div>
                    <p className="af-class-p">I design beautiful and powerful websites for modern businesses. Any business today needs a website that wins customers’ trust and helps you do your business well. I make sure your website is up to that standard.</p>
                    <div className="af-class-title">Development</div>
                    <p className="af-class-p">I build websites in Webflow where I can create responsive, powerful and fully custom websites. Plus, Webflow has an incredibly simple Content Editor for you and your team to edit website content quickly and easily.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-beta">
              <div className="af-class-text-block-3">beta</div>
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

export default IndexView

/* eslint-enable */