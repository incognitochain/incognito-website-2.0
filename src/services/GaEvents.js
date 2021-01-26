import ReactGA from 'react-ga';

export default {

    clickPeople:()=>{ 
      ReactGA.event({
        category: 'landingpage',
        action: 'Click People'
      });
    },
    
    clickCode:()=>{ 
        ReactGA.event({
        category: 'landingpage',
        action: 'Click Code'
      });
    },
    clickAddress:()=>{
      ReactGA.event({
        category: 'landingpage',
        action: 'Enter address'
      }); 
    },
    clickIOS:()=>{
      ReactGA.event({
        category: 'landingpage',
        action: 'Click IOS'
      });  
    },
    clickGPlay:()=>{
      ReactGA.event({
        category: 'landingpage',
        action: 'Click GPlay'
      }); 
    },
    clickApk:()=>{
      ReactGA.event({
        category: 'landingpage',
        action: 'Click Apk'
      }); 
    }
    
}