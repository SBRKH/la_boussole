import i18next from 'i18next';
import {translationFr} from './translation/translation.fr';
import {translationEn} from './translation/translation.en';
import moment from 'moment';
import detector from "i18next-browser-languagedetector";

i18next.use(detector)
    .init({
        interpolation: {
            debug: true,
            escapeValue: false,
            format: (value, format, lng) => {
                if (value instanceof Date) return moment(value).format(format);
                return value;
            },
        },
        lng: 'fr', // 'fr' | 'en',
        fallbackLng: "en",
        resources: {
            fr: {
                translation: translationFr,
            },
            en: {
                translation: translationEn,
            },
        },
    });
export default i18next;
