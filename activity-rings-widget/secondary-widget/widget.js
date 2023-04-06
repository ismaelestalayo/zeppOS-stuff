// index.js
import { align, createWidget, data_type, widget } from '@zos/ui'
import { push } from '@zos/router'

const SCREEN_SIZE = 466;
const SCREEN_CENTER = SCREEN_SIZE / 2;
const RINGS_WIDTH = 40;
const RINGS_MARGIN = 75;
const RINGS_SPACING = 5;

SecondaryWidget({
  build() {    
    createWidget(widget.TEXT, {
      x: px(0), y: px(5), text_size: px(28),
      w: SCREEN_SIZE,
      color: 0xffffff,
      text: 'Activity',
      align_h: align.CENTER_H,
    });

    // RINGS
    const radius1 = SCREEN_CENTER - RINGS_MARGIN;
    createWidget(widget.ARC_PROGRESS, {
      center_x: SCREEN_CENTER, center_y: SCREEN_CENTER, radius: radius1 - 1,
      start_angle: -5, end_angle: 360, color: 0x4b071b,
      level: 100, line_width: RINGS_WIDTH })
    createWidget(widget.CIRCLE, {
        center_x: SCREEN_CENTER + 5, center_y: RINGS_MARGIN,
        radius: (RINGS_WIDTH / 2) - 1, color: 0xf81458, line_width: RINGS_WIDTH })
    createWidget(widget.ARC_PROGRESS, {
      center_x: SCREEN_CENTER, center_y: SCREEN_CENTER, radius: radius1 - 1,
      start_angle: -5, end_angle: 360, color: 0xf81458,
      line_width: RINGS_WIDTH, type: data_type.STEP })
    createWidget(widget.IMG, {
      src: 'arrow_steps.png',
      x: SCREEN_CENTER - 20/2 + 5, y: RINGS_MARGIN - 20/2
    })

    const radius2 = SCREEN_CENTER - RINGS_MARGIN - RINGS_WIDTH - RINGS_SPACING;
    createWidget(widget.ARC_PROGRESS, {
      center_x: SCREEN_CENTER, center_y: SCREEN_CENTER, radius: radius2 - 1,
      start_angle: -5, end_angle: 360, color: 0x354d00,
      level: 100, line_width: RINGS_WIDTH })
    createWidget(widget.CIRCLE, {
      center_x: SCREEN_CENTER + 5, center_y: RINGS_MARGIN + RINGS_WIDTH + RINGS_SPACING,
      radius: (RINGS_WIDTH / 2) - 1, color: 0xb0fc00, line_width: RINGS_WIDTH })
    createWidget(widget.ARC_PROGRESS, {
      center_x: SCREEN_CENTER, center_y: SCREEN_CENTER, radius: radius2 - 1,
      start_angle: -5, end_angle: 360, color: 0xb0fc00,
      line_width: RINGS_WIDTH, type: data_type.CAL })
    createWidget(widget.IMG, {
      src: 'arrow_exercise.png',
      x: SCREEN_CENTER - 20/2 + 5, y: RINGS_MARGIN + RINGS_WIDTH + RINGS_SPACING - 20/2
    })

    const radius3 = SCREEN_CENTER - RINGS_MARGIN - 2*RINGS_WIDTH - 2*RINGS_SPACING;
    createWidget(widget.ARC_PROGRESS, {
      center_x: SCREEN_CENTER, center_y: SCREEN_CENTER, radius: radius3 - 1,
      start_angle: -5, end_angle: 360, color: 0x004d43,
      level: 100, line_width: RINGS_WIDTH })
    createWidget(widget.CIRCLE, {
      center_x: SCREEN_CENTER + 5, center_y: RINGS_MARGIN + 2*RINGS_WIDTH + 2*RINGS_SPACING,
      radius: (RINGS_WIDTH / 2) - 1, color: 0x00ffe3, line_width: RINGS_WIDTH })
    createWidget(widget.ARC_PROGRESS, {
      center_x: SCREEN_CENTER, center_y: SCREEN_CENTER, radius: radius3 - 1,
      start_angle: -5, end_angle: 360, color: 0x00ffe3,
      line_width: RINGS_WIDTH, type: data_type.STAND })
    createWidget(widget.IMG, {
      src: 'arrow_stand.png',
      x: SCREEN_CENTER - 20/2 + 5, y: RINGS_MARGIN + 2*RINGS_WIDTH + 2*RINGS_SPACING - 20/2
    })
    
    // click anywhere
    createWidget(widget.BUTTON, {
      text: "",
      x: 0,
      y: 0,
      w: SCREEN_SIZE,
      h: SCREEN_SIZE,
      normal_src: "transparent.png",
      press_src: "transparent.png",
      color: 0xffffff,
      text_size: 28,
      radius: 28,
      click_func: () => {
        push({
          url: "page/gtr/home/index.page",
        });
      },
    });

  }
})