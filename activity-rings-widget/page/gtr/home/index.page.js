import * as hmUI from '@zos/ui'
import { log as Logger, px } from '@zos/utils'
import { TEXT_STYLE } from './index.style'

const logger = Logger.getLogger('helloworld')
const SCREEN_SIZE = 466;
const SCREEN_CENTER = SCREEN_SIZE / 2;
const RINGS_WIDTH = 40;
const RINGS_MARGIN = 75;
const RINGS_SPACING = 5;

Page({
  build() {
    logger.debug('page build invoked')
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: px(10), y: px(0), text_size: px(36),
      w: 200,
      color: 0xffffff,
      text: 'Activity'
    });

    // RINGS
    const radius1 = SCREEN_CENTER - RINGS_MARGIN;
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      center_x: SCREEN_CENTER, center_y: SCREEN_CENTER, radius: radius1,
      start_angle: -10, end_angle: 360, color: 0x4b071a,
      level: 100, line_width: RINGS_WIDTH })
    hmUI.createWidget(hmUI.widget.CIRCLE, {
        center_x: SCREEN_CENTER, center_y: RINGS_MARGIN,
        radius: (RINGS_WIDTH / 2) - 1, color: 0xf81458, line_width: RINGS_WIDTH })
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      center_x: SCREEN_CENTER, center_y: SCREEN_CENTER, radius: radius1,
      start_angle: -10, end_angle: 360, color: 0xf81458,
      line_width: RINGS_WIDTH, type: hmUI.data_type.STEP })

    const radius2 = SCREEN_CENTER - RINGS_MARGIN - RINGS_WIDTH - RINGS_SPACING;
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      center_x: SCREEN_CENTER, center_y: SCREEN_CENTER, radius: radius2,
      start_angle: -10, end_angle: 360, color: 0x354d00,
      level: 100, line_width: RINGS_WIDTH })
    hmUI.createWidget(hmUI.widget.CIRCLE, {
      center_x: SCREEN_CENTER, center_y: RINGS_MARGIN + RINGS_WIDTH + RINGS_SPACING,
      radius: (RINGS_WIDTH / 2) - 1, color: 0xb0fc00, line_width: RINGS_WIDTH })
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      center_x: SCREEN_CENTER, center_y: SCREEN_CENTER, radius: radius2,
      start_angle: -10, end_angle: 360, color: 0xb0fc00,
      line_width: RINGS_WIDTH, type: hmUI.data_type.CAL })

    const radius3 = SCREEN_CENTER - RINGS_MARGIN - 2*RINGS_WIDTH - 2*RINGS_SPACING;
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      center_x: SCREEN_CENTER, center_y: SCREEN_CENTER, radius: radius3,
      start_angle: -10, end_angle: 360, color: 0x004d43,
      level: 100, line_width: RINGS_WIDTH })
    hmUI.createWidget(hmUI.widget.CIRCLE, {
      center_x: SCREEN_CENTER, center_y: RINGS_MARGIN + 2*RINGS_WIDTH + 2*RINGS_SPACING,
      radius: (RINGS_WIDTH / 2) - 1, color: 0x00ffe3, line_width: RINGS_WIDTH })
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      center_x: SCREEN_CENTER, center_y: SCREEN_CENTER, radius: radius3,
      start_angle: -10, end_angle: 360, color: 0x00ffe3,
      line_width: RINGS_WIDTH, type: hmUI.data_type.STAND })

  },
  onInit() {
    logger.debug('page onInit invoked')
  },

  onDestroy() {
    logger.debug('page onDestroy invoked')
  },
})