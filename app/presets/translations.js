'use strict';

angular
  .module('mdlinguaApp')
  .constant('defaultLang', 'en')
  .constant('translations', {
    en: {
      'pain?': 'Are you in pain now?',
      'yes': 'Yes',
      'no': 'No',
      'a_little': 'a little',
      'action_when_started': 'What were you doing when the pain started?',
      'rest': 'Resting',
      'exercise': 'Exercise',
      'normal_activity': 'Normal physical activities',
      'making_better?': 'Is there anything that makes the pain better?',
      'lay_down': 'Laying down',
      'lean_fw': 'leaning forward',
      'eat': 'eating',
      'drugs': 'drugs',
      'making_worse?': 'Is there anything that makes the pain worse?',
      'pain_quality': 'How would you describe the quality of the pain?',
      'stab': 'Stabbing',
      'burn': 'Burning',
      'lancinating': 'Lancinating',
      'squeez': 'Squeezing',
      'continuous?': 'Is the pain continuous or intermittent?',
      'continuous': 'continuous',
      'intermittent': 'intermittent',
      'location_chest': 'Where is the pain located?',
      'location_radiate': 'Is the pain radiating to another part of the body?',
      'severity': 'How severe is the pain based on a scale of 1 to 10?',
      'when_started': 'When did the pain first occur?',
      'additional_symptoms': 'Did you have additional symptoms?',
      'vomiting': 'vomiting',
      'fever': 'fever',
      'sweating': 'sweating',
      'weakness': 'weakness',
      'diarrhea': 'diarrhea',
      'palpitations': 'palpitations',
      'past_event?': 'Have you felt this kind of pain in the past?',
      'hypertension?': 'Do you suffer from hypertension?',
      'y_controlled': 'yes, controlled',
      'y_uncontrolled': 'yes, uncontrolled',
      'diabetes?': 'Do you suffer from diabetes?',
      'hyperlipidemia?': 'Do you suffer from hyperlipidemia?',
      'background_diseases': 'Do you suffer from any of the following diseases?',
      'val_heart_disease': 'Valvular heart disease',
      'AF': 'Atrial Fibrillation',
      'Osteoporosis': 'Osteoporosis',
      'Anemia': 'Anemia',
      'Cancer': 'Cancer',
      'Autoimmune_disease': 'Autoimmune_disease',
      'PVD': 'Peripheral Vascular disease',
      'Epilepsy': 'Epilepsy',
      'Asthma': 'Asthma',
      'COPD': 'COPD',
      'Hypothyroidism': 'Hypothyroidism',
      'Hyperthyroidism': 'Hyperthyroidism',
      'smoke?': 'Do you smoke?',
      'alcohol?': 'Do you drink alcohol?',
      'exercise?': 'Do you exercise?',
      'medications?': 'Do you take any medications? (Can you show me if you have them with you?)',

      'thanx': 'Thank you very much for your patience',
      'admit': 'I want to admit you for further investigation',
      'blood_test': 'I need to take blood test',
      'stress_test': 'I want you to do a stress test'
    },
    ru: {
      'pain?': 'Вы чувствуете боль сейчас?',
      'yes': 'Да',
      'no': 'Нет',
      'a_little': 'маленький',
      'action_when_started': 'Что вы делали, когда боль начала?',
      'rest': 'Отдых',
      'exercise': 'Упражнение',
      'normal_activity': 'Нормальные физические нагрузки',
      'making_better?': 'Есть что-нибудь, что делает боль лучше?',
      'lay_down': 'Укладка',
      'lean_fw': 'наклонившись вперед',
      'eat': 'принимать пищу',
      'drugs': 'наркотики',
      'making_worse?': 'Есть что-нибудь, что делает боль хуже?',
      'pain_quality': 'Как бы вы оценили качество боли?',
      'stab': 'поножовщина',
      'burn': 'Сжигание',
      'lancinating': 'стреляющий',
      'squeez': 'выжимание',
      'continuous?': 'Является ли боль непрерывно или прерывисто?',
      'continuous': 'непрерывный',
      'intermittent': 'прерывистый',
      'location_chest': 'Где находится боль?',
      'location_radiate': 'Является ли боль с иррадиацией в другой части тела?',
      'severity': 'Как серьезна боль по шкале от 1 до 10?',
      'when_started': 'Когда боль в первую очередь происходит?',
      'additional_symptoms': 'Было ли у вас дополнительные симптомы?',
      'vomiting': 'рвота',
      'fever': 'лихорадка',
      'sweating': 'потоотделение',
      'weakness': 'слабое место',
      'diarrhea': 'диарея',
      'palpitations': 'сердцебиение',
      'past_event?': 'Вы чувствовали этот вид боли в прошлом?',
      'hypertension?': 'Вы страдаете от гипертонии?',
      'y_controlled': 'да, контролируется',
      'y_uncontrolled': 'да, неконтролируемое',
      'diabetes?': 'Вы страдаете от диабета?',
      'hyperlipidemia?': 'Вы страдаете от гиперлипидемии?',
      'background_diseases': 'Вы страдаете от любого из следующих заболеваний?',
      'val_heart_disease': 'Порок клапана сердца',
      'AF': 'мерцательная аритмия',
      'Osteoporosis': 'Остеопороз',
      'Anemia': 'анемия',
      'Cancer': 'Рак',
      'Autoimmune_disease': 'Аутоиммунное заболевание',
      'PVD': 'Сосудистые заболевания периферийных',
      'Epilepsy': 'эпилепсия',
      'Asthma': 'астма',
      'COPD': 'хроническое обструктивное заболевание легких',
      'Hypothyroidism': 'гипотиреоз',
      'Hyperthyroidism': 'гипертиреоз',
      'smoke?': 'Вы курите?',
      'alcohol?': 'ты пьешь алкоголь?',
      'exercise?': 'Ты занимаешься?',
      'medications?': 'Вы принимаете какие-нибудь лекарства? (Можете ли вы показать мне, если они у вас есть с вами?)',

      'thanx': 'Спасибо вам большое за ваше терпение',
      'admit': 'Я хочу, чтобы признать вас для дальнейшего расследования',
      'blood_test': 'Мне нужно, чтобы принять анализ крови',
      'stress_test': 'Я хочу, чтобы ты стресс-тест'
    }
  });
