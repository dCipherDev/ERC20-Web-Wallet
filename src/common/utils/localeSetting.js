import intl from 'react-intl-universal';
import locale from '../../modules/locales/localesData'
import moment from 'moment';



const locales = {
  "ro-RO": locale.ro_RO,
  "en-US": locale.en_US,
  "zh-CN": locale.zh_CN,
  "fr-FR":locale.fr_FR
};

export function setLocale(value) {

  switch (value) {
	case "ro-RO" :
      moment.locale('ro-ro');
      break;
    case "zh-CN" :
      moment.locale('zh-cn');
      break;
    case "en-US":
      moment.locale('en');
      break;
    default:
      moment.locale('en');
  }

  intl.init({
    currentLocale: value || 'en-US',
    locales,
  });

  window.locale = value || 'en-US'

}


