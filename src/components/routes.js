import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../images/logo.png";
import { Button } from 'react-bootstrap';
import { Route, Link, Switch,} from 'react-router-dom'
import {Teoric} from "./teorics"
import {translate} from "../translate"
import {Numbers} from "./number"
import {Applications} from "./applications"
import {Home} from "./home"
import {Article} from "./article"
import { Phrase } from './phrase';
import {Download} from "./downloads"
import number from "../images/number.png";

let articles = [{
    image: number,
    date:"23:12:34",
    subject: "hanzii",
    theme: "grammar",
    text: "The first newspaper, Siraj-ul-Akhbar (Lamp of the News) was initially published on January 11 , 1906, with Abdul-Rauf as editor. After this first and only issue in Persian language, its publication stopped. It was revived in October 1911 by Mahmud Tarzi, the editor and owner of the newspaper who was critical of the friendship  between the British Empire and Afghanistan. Mahmud Tarzi became known as the pioneer of Afghan journalism, in 1916 he famously wrote:   'Siraj Al Akhbar Afghaniya is neither British, nor Russian nor French nor Italian nor German nor Chinese or Japanese.    It is a Muslim newspaper and, in that, it is specifically an Afghan newspaper. Whatever it says, whatever melody it sings,     is from an Afghan point of view and stems from the tone of Afghan national dignity.'      In 1919, under King Amanullah Khan, Aman-i-Afghan (Afghan Peace) replaced Siraj al-Akhbar, serving as an organ       of the government, while several smaller private journals appeared under different ministries.[11] Along with these developments,        Radio Kabul began broadcasting in 1925, which inaugurated a new era of mass media in the country.[11] The 1964 Constitution of         Afghanistan and the Press Law of 1965 provided for freedom of the press, within the boundaries of appropriate behavior. The          press was editorially independent from government but was instructed to safeguard the interests of the state and constitutional monarchy,          Islam, and public order. Afghan journalism progressed and developed from the 1950s through to the 1970s, though it remained limited. "
}];

function withProps(Component, props) {
    return function(matchProps) {
      return <Component {...props} {...matchProps} />
    }
}

export class Routes extends React.Component {
    constructor(props){
      super(props)
      this.state = {language: props.language}
    }

    componentWillReceiveProps(props) {
      this.setState({ language: props.language });  
  }
  render() {
      let arr = []
      for(let article of articles){
        arr.push(<Route exact path={"/teorics/" + article.subject} component={withProps(Article, article)} />);
      }
      const itemsToShow = arr.concat([
        <Route exact path="/teorics/grammar" component={withProps(Teoric, { theme: 'grammar', language: this.state.language })} />,
        <Route exact path="/teorics/vocabulary" component={withProps(Teoric, { theme: 'vocabulary', language: this.state.language })} />,
        <Route exact path="/teorics/expresions" component={withProps(Teoric, { theme: 'expresions', language: this.state.language })} />,
        <Route exact path="/teorics/mocks" component={withProps(Teoric, { theme: 'mocks', language: this.state.language })} />,
        <Route exact path="/teorics/aboutchina" component={withProps(Teoric, { theme: 'aboutchina', language: this.state.language })} />,
        <Route exact path="/applications/number" component={withProps(Numbers, { language: this.state.language })} />,
        <Route exact path="/applications/phrase" component={withProps(Phrase, {language: this.state.language })} />,
        <Route exact path="/applications" component={withProps(Applications, { language: this.state.language })} />,
        <Route exact path="/downloads" component={withProps(Download, { language: this.state.language })} />,
        <Route exact path="/about" component={withProps(Teoric, { theme: 'main', language: this.state.language })} />,
        <Route exact path="/teorics" component={withProps(Teoric, { theme: 'main',language: this.state.language })} />,
        <Route exact path="/" component={withProps(Home, { language: this.state.language })} />
        ])
    return (
    <div >
        {itemsToShow}
    </div>);
  }
}

export default Routes;
