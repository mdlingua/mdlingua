'use strict';

angular
  .module('mdlinguaApp')
  .constant('questions', {
    '0': {
      'id': '0',
      'type': 'choice',
      'title': 'pain?',
      'answers': [
        'yes',
        'no',
        'a_little'
      ]
    },
    '1': {
      'id': '1',
      'type': 'choice',
      'title': 'action_when_started',
      'answers': [
        'rest',
        'exercise',
        'normal_activity'
      ]
    },
    '2': {
      'id': '2',
      'type': 'choice',
      'title': 'making_better?',
      'answers': [
        'rest',
        'lay_down',
        'lean_fw',
        'eat',
        'drugs'
      ]
    },
    '3': {
      'id': '3',
      'type': 'choice',
      'title': 'making_worse?',
      'answers': [
        'exercise',
        'lay_down',
        'eat'
      ]
    },
    '4': {
      'id': '4',
      'type': 'choice',
      'title': 'pain_quality',
      'answers': [
        'stab',
        'burn',
        'lancinating',
        'squeez'
      ]
    },
    '5': {
      'id': '5',
      'type': 'choice',
      'title': 'continuous?',
      'answers': [
        'continuous',
        'intermittent'
      ]
    },
    '8': {
      'id': '8',
      'type': 'scale_1-10',
      'title': 'severity'
    },
    '9': {
      'id': '9',
      'type': 'time_scale',
      'title': 'when_started'
    },
    '10': {
      'id': '10',
      'type': 'choice',
      'title': 'additional_symptoms',
      'answers': [
        'vomiting',
        'fever',
        'sweating',
        'weakness',
        'diarrhea',
        'palpitations'
      ],
      'multiple': true
    },
    '11': {
      'id': '11',
      'type': 'extand_if_true',
      'title': 'past_event?'
    },
    '12': {
      'id': '12',
      'type': 'choice',
      'title': 'hypertension?',
      'answers': [
        'y_controlled',
        'y_uncontrolled',
        'no'
      ]
    },
    '13': {
      'id': '13',
      'type': 'choice',
      'title': 'diabetes?',
      'answers': [
        'y_controlled',
        'y_uncontrolled',
        'no'
      ]
    },
    '14': {
      'id': '14',
      'type': 'choice',
      'title': 'hyperlipidemia?',
      'answers': [
        'y_controlled',
        'y_uncontrolled',
        'no'
      ]
    },
    '15': {
      'id': '15',
      'type': 'choice',
      'title': 'background_diseases',
      'answers': [
        'val_heart_disease',
        'AF',
        'Osteoporosis',
        'Anemia',
        'Cancer',
        'Autoimmune_disease',
        'PVD',
        'Epilepsy',
        'Asthma',
        'COPD',
        'Hypothyroidism',
        'Hyperthyroidism'
      ],
      'multiple': true
    },
    '16': {
      'id': '16',
      'type': 'extend_if_true',
      'title': 'smoke?'
    },
    '17': {
      'id': '17',
      'type': 'choice',
      'title': 'alcohol?',
      'answers': [
        'yes',
        'no'
      ]
    },
    '18': {
      'id': '18',
      'type': 'choice',
      'title': 'exercise?',
      'answers': [
        'yes',
        'no'
      ]
    },
    '19': {
      'id': '19',
      'type': 'free_txt',
      'title': 'medications?'
    }
  });
