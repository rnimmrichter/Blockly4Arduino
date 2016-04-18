/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Generating Microduino code for procedure (function) blocks.
 *
 */
'use strict';

goog.provide('Blockly.Arduino.md_audio');

goog.require('Blockly.Arduino');

/**
 * The audio play block
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['mcookie_audio_play'] = function(block) {
  var code = '//Speel een specifiek geluidsbestand af, de bestanden moeten in map "1" gezet worden\n' +
  '  AUDIO.chooseFile(1, AUDIONAME);\n' +
  '  AUDIO.play();';
  return code;
};

/**
 * The audio pause block
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['mcookie_audio_pause'] = function(block) {
  var code = '  AUDIO.pause();';
  return code;
};


