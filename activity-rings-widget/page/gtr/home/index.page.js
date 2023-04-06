import * as hmUI from '@zos/ui'
import { log as Logger, px } from '@zos/utils'
import { Calorie, Stand, Step  } from '@zos/sensor'


const logger = Logger.getLogger('helloworld')
const SCREEN_SIZE = 466;
const SCREEN_CENTER = SCREEN_SIZE / 2;
const RINGS_WIDTH = 15;
const RINGS_RADIUS = 40;
const RINGS_SPACING = 120;

const calCurrent = new Calorie().getCurrent();
const calTarget = new Calorie().getTarget();

const standCurrent = new Stand().getCurrent();
const standTarget = new Stand().getTarget();

const stepCurrent = new Step().getCurrent();
const stepTarget = new Step().getTarget();

Page({
  build() {
    logger.debug('page build invoked')
    // hmUI.createWidget(hmUI.widget.STROKE_RECT, {
    //   x: 0, y: 0, w: SCREEN_SIZE, h: SCREEN_SIZE,
    //   radius: SCREEN_SIZE, color: 0x00ffff, line_width: 2
    // })
    
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      center_x: 120, center_y: SCREEN_CENTER - RINGS_SPACING, radius: RINGS_RADIUS,
      start_angle: -5, end_angle: 360, color: 0x4b071b,
      level: 100, line_width: RINGS_WIDTH });
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      center_x: 120, center_y: SCREEN_CENTER - RINGS_SPACING, radius: RINGS_RADIUS,
      start_angle: -5, end_angle: 360, color: 0xce2c26,
      line_width: RINGS_WIDTH, type: hmUI.data_type.STEP });
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 180, y: SCREEN_CENTER - RINGS_SPACING - 40, text_size: 32,
      color: 0xffffff, text: 'MOVE' });
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 180, y: SCREEN_CENTER - RINGS_SPACING - 10, text_size: 32,
      w: 200, color: 0xe53653,
      text: `${calCurrent}/${calTarget} CAL` });
    
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      center_x: 120, center_y: SCREEN_CENTER, radius: RINGS_RADIUS,
      start_angle: -5, end_angle: 360, color: 0x354d00,
      level: 100, line_width: RINGS_WIDTH });
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      center_x: 120, center_y: SCREEN_CENTER, radius: RINGS_RADIUS,
      start_angle: -5, end_angle: 360, color: 0x6fd841,
      line_width: RINGS_WIDTH, type: hmUI.data_type.CAL });
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 180, y: SCREEN_CENTER - 40, text_size: 32,
      w: 200, color: 0xffffff, text: 'EXERCISE' });
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 180, y: SCREEN_CENTER - 10, text_size: 32,
      w: 200, color: 0xb7f84e,
      text: `${calCurrent}/${calTarget} MIN` });
    
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      center_x: 120, center_y: SCREEN_CENTER + RINGS_SPACING, radius: RINGS_RADIUS,
      start_angle: -5, end_angle: 360, color: 0x004d43,
      level: 100, line_width: RINGS_WIDTH });
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      center_x: 120, center_y: SCREEN_CENTER + RINGS_SPACING, radius: RINGS_RADIUS,
      start_angle: -5, end_angle: 360, color: 0x55badc,
      line_width: RINGS_WIDTH, type: hmUI.data_type.STAND });
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 180, y: SCREEN_CENTER + RINGS_SPACING - 10, text_size: 32,
      w: 200, color: 0x75e5e4,
      text: `${standCurrent}/${standTarget} HR` });
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 180, y: SCREEN_CENTER + RINGS_SPACING - 40, text_size: 32,
      w: 200, color: 0xffffff, text: 'STAND' });

  },
  onInit() {
    logger.debug('page onInit invoked')
  },

  onDestroy() {
    logger.debug('page onDestroy invoked')
  },
})