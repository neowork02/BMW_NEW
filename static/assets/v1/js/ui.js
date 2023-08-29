/* ==============================
 * 작성일 : 2022-07-01
 * 작성자 : 장영석
 * 작성자의 허락없이 무단 도용시 고발 조치 합니다.
 * ============================== */

$(function () {
  /* ==============================
   * common
   * ============================== */
  common.init();
  include.init();
  layerPopup.init();
  animation.init();
  formBox.init();
  button.init();

  clickMotion();

  tabWrap.init();

  otherClick();

  /* ==============================
   * content
   * ============================== */
});


const otherClick = function () {
  /* 다른거 클릭했을때 자동 닫힘 */
  $('body').click(function (e) {
    if (!$(e.originalEvent.target).closest('.tooltipWrap').length && !$(e.originalEvent.target).closest('.layerPopWrap').length) {
      $('.tooltipPop').fadeOut('fast');
      $('.popupDim').fadeOut('fast', function () {
        $(this).remove();
      });
      $('body').removeClass('scrollLock');
    }
    if (!$(e.originalEvent.target).closest('.selectBox').length) {
      $('.selectTit').removeClass('on').siblings('.selectView').removeClass('active');
    }

    if (!$(e.originalEvent.target).closest('.menuBox').length && !$(e.originalEvent.target).hasClass('ico_menu')) {
      $('.menuAllBox').slideUp();
    }

    if (!$(e.originalEvent.target).closest('.userCheckBox').length && !$(e.originalEvent.target).hasClass('ico_user')) {
      $('.userCheckBox').slideUp();
    }

    if (!$(e.originalEvent.target).closest('.locationBox').length) {
      $('.locationBox').removeClass('on');
    }
  });
};

const observerTarget = function (e, f) {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const target = entry.target;
      f();
      observer.unobserve(target);
    });
  });

  observer.observe(e);
};

const imgError = function (e) {
  $(e).hide().parent().addClass('errorImg');
};

const common = {
  header: function () {
    $(document).on('click','#headerWrap .locationBox > a',function(){
      $(this).parent().toggleClass('on');
      return false;
    });
    
    $(document).on('click','#header .menu > a',function(){
      $('.userCheckBox').slideUp(600,'easeInOutExpo');
      $(this).siblings('.menuAllBox').slideToggle(600,'easeInOutExpo');
      return false;
    });

    
    $(document).on('click','#header .user > a',function(){
      $('.menuAllBox').slideUp(600,'easeInOutExpo');
      $(this).siblings('.userCheckBox').slideToggle(600,'easeInOutExpo');
      return false;
    });

    $(document).on('click','#headerWrap .userCheckBox .btnMenuClose',function(){
      $(this).closest('.userCheckBox').slideUp(600,'easeInOutExpo');
      return false;
    });

    $(document).on('click','#headerWrap .menuBox .btnMenuClose',function(){
      $(this).closest('.menuAllBox').slideUp(600,'easeInOutExpo');
      return false;
    });

    $(window).scroll(function () {
      const scrollT = $(window).scrollTop();
      if (scrollT > 100) {
        $('#headerWrap').addClass('scrollAction');
      } else {
        $('#headerWrap').removeClass('scrollAction');
      }
    });

    resize();
    $(window).resize(function () {
      resize();
    });

    function resize() {
      const winW = $(window).outerWidth();
      const winH = $(window).outerHeight();
      $('html').css('--win-height',winH + 'px');
    }

  },
  footer: function () {
  },
  init: function () {
    common.header();
    common.footer();
  }
};

const loading = {
  open: function (set) {
    let settings = $.extend(
      {
        target: $('body'),
        text: '',
      },set
    );

    if(settings.target.prop('tagName') == 'BODY') {
      $('body').addClass('scrollLock');
    }
    
    settings.target.append(layerPopHtml())
    setTimeout(function () {
      settings.target.find('.loadingWrap').addClass('on');
    }, 10);


    function layerPopHtml() {
      let $layout = '<div id="ladingPop" class="layerPopWrap loadingWrap">';
      $layout += '<div class="bg"></div>';
      $layout += '<div class="loadingBox">';
      $layout += '<div class="loading"><i></i><i></i><i></i><i></i></div>';
      if (settings.text) {
        $layout += '<div class="text">' + settings.text + '</div>';
      }
      $layout += '</div></div>';
      return $layout;
    }
  },
  close: function (set) {
    let settings = $.extend(
      {
        target: $('body'),
      },set
    );
    if(settings.target.prop('tagName') == 'BODY') {
      $('body').removeClass('scrollLock');
    }
      
    settings.target.find('.loadingWrap').removeClass('on');
    setTimeout(function () {
      settings.target.find('.loadingWrap').remove();
    }, 300);
  }
};

const formBox = {
  input: function () {
    $('input')
      .on('focusin', function () {
        if (!$(this).attr('readonly')) {
          $(this).closest('.inputBox').addClass('focus');

          if ($(this).val()) {
            inputBtn($(this), true);
          } else {
            inputBtn($(this), false);
          }

          const winW = $(window).outerWidth();
          if (winW <= 767 && $(this).attr('placeholder')) {
            $('<div class="placeholderTip"></div>').appendTo($(this).closest('.inputBox')).text($(this).attr('placeholder'));
          }
        }
      })
      .on('focusout', function () {
        if (!$(this).attr('readonly')) {
          $(this).closest('.inputBox').removeClass('focus');
          inputBtn($(this), false);

          const winW = $(window).outerWidth();
          if (winW <= 767 && $(this).attr('placeholder')) {
            $(this).closest('.inputBox').find('.placeholderTip').remove();
          }
        }
      })
      .on('keyup', function () {
        if (!$(this).attr('readonly')) {
          if ($(this).val()) {
            inputBtn($(this), true);
          } else {
            inputBtn($(this), false);
          }
        }
      });

    $(document).on('keydown','input.inpNumber',function(e){
      const code = e.keyCode;
      const minusChk = $(this).data('minus');
      if((code >= 48 && code <= 57) || (code >= 96 && code <= 105) || code == 8 || code == 46 || code == 37 || code == 39 || code == 36){
      } else {
        return false;
      }
    }).on('keyup','input.inpNumber',function(e){
      if($(this).val() !== '' && $(this).val() !== '-'){
        const value = Number($(this).val().replaceAll(/-|,/g, ''));
        const formatValue = value.toLocaleString('ko-KR');
        const minusChk = $(this).data('minus') ? '-' : '';
        $(this).val(minusChk + formatValue);
      }else {
        $(this).val('');
      }
      return false;
    }).on('paste','input.inpNumber',function(e){
      return false;
    });

    $(document).on('click', '.inputBox .btnClose', function () {
      $(this).siblings('input').val('');
      return false;
    });

    function inputBtn(target, check) {
      if (check) {
        if (target.closest('.inputBox').find('.btnClose').length === 0) {
          if (target.closest('.inputBox').hasClass('right')) {
            target.closest('.inputBox').find('input').before('<button class="btnClose">삭제</button>');
          } else {
            target.closest('.inputBox').find('input').after('<button class="btnClose">삭제</button>');
          }
        }
      } else {
        setTimeout(function () {
          target.siblings('.btnClose').remove();
        }, 300);
      }
    }

    /* 비밀번호 */
    $(document).on('click', '.btnPwdShow', function () {
      if ($(this).siblings('input').attr('type') == 'password') {
        $(this).siblings('input').attr('type', 'text').closest('.inputBox').addClass('show');
      } else {
        $(this).siblings('input').attr('type', 'password').closest('.inputBox').removeClass('show');
      }
      return false;
    });

    /* 달력 */
    $('.datepicker :input').datepicker({
      dateFormat: 'yy-mm-dd'
      // prevText: '이전 달',
      // nextText: '다음 달',
      // monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      // monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      // dayNames: ['일', '월', '화', '수', '목', '금', '토'],
      // dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
      // dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
      // showMonthAfterYear: true,
      // yearSuffix: '년'
    });

    $('.datepicker i').click(function () {
      $(this).siblings(':input').datepicker('show');
    });

    $('.fileBox :file').change(function () {
      $(this).siblings(':text').val($(this).val());
    });

    /* max-length */
    $('.inputBox.maxCheck').each(function () {
      const target = $(this),
        maxlength = target.find('input').attr('maxlength'),
        number = target.find('.number'),
        idx = 0;
      number.find('.num').text(idx).siblings('.max').text(maxlength);
      target
        .find('input')
        .on('keydown keyup', function () {
          number.find('.num').text($(this).val().substr(0, maxlength).length);
        })
        .on('copy cut paste', function (e) {
          const text = e.clipboardData.getData('text/plain');
          number.find('.num').text(text.length);
        });
    });
  },
  selectInit: function () {
    const target = $('.selectBox:not(.JS)');
    target.each(function () {
      const $this = $(this);
      const select = $(this).find('select');
      const option = select.find('option');
      const disabledCheck = select.is(':disabled');
      let selected = select.find('option:selected');

      let html = '<div class="select">';
      html += '<a href="#" class="selectTit">' + selected.text() + '</a>';
      html += '<div class="selectView"><div class="contBox"></div>';
      html += '</div>';
      html += '</div>';

      $this.addClass('JS');
      select.hide();
      $this.append(html);
      option.each(function (e) {
        let optionH = '<a href="#">' + option[e].text + '</a>';
        $this.find('.selectView .contBox').append(optionH);
      });
      if (disabledCheck) {
        $this.addClass('disabled');
      }
    });
  },
  select: function () {
    $(document).on('click', '.select .selectTit', function () {
      if (!$(this).closest('.selectBox').hasClass('disabled')) {
        $('.selectTit').not($(this)).removeClass('on').siblings('.selectView').removeClass('active');
        $(this).toggleClass('on').siblings('.selectView').toggleClass('active');
      }
      return false;
    });
    $(document).on('click', '.select .selectView a', function () {
      const idx = $(this).index();
      const text = $(this).text();
      $(this).addClass('on').siblings().removeClass('on').closest('.selectView').removeClass('active');
      $(this).closest('.select').find('.selectTit').text(text).removeClass('on');
      $(this).closest('.selectBox').find('option').eq(idx).prop('selected', true);
      $(this).closest('.selectBox').find('select').change();
      return false;
    });

    $(document).on('click', '.select .selectView', function (e) {
      if ($(e.originalEvent.target).hasClass('selectView')) {
        $(this).removeClass('active').siblings().removeClass('on');
      }
    });

    // $(document).on('focusout', '.select .selectTit', function () {
    //   $(this).removeClass('on').siblings('.selectView').removeClass('active');
    // });

    $(document).on('click','.selectContBox > a',function(){
      $('.selectContBox > a').not($(this)).siblings('.view').slideUp().closest('.selectContBox').removeClass('on');
      $(this).siblings('.view').slideToggle().closest('.selectContBox').toggleClass('on');
      return false;
    });
    $(document).on('click','.selectContBox .view a',function(){
      const html = $(this).html();
      $(this).closest('.view').siblings('a').html(html);
      $(this).addClass('on').siblings().removeClass('on');
      $(this).closest('.view').slideUp('fast').closest('.selectContBox').removeClass('on');
      return false;
    });
  },
  textarea: function () {
    const target = $('.formBox').find('.textarea');
    target.each(function () {
      const $this = $(this);
      $this
        .find('textarea')
        .on('focusin', function () {
          $(this).closest('.textarea').addClass('focus');
        })
        .on('focusout', function () {
          $(this).closest('.textarea').removeClass('focus');
        });
      if ($this.hasClass('auto')) {
        $this.prepend('<p class="hiddenText"></p>');
        $this.find('textarea').on('keyup keydown keypress', function (e) {
          const val = $(this).val().replace(/\n/g, '<br />&nbsp;');

          $this.find('.hiddenText').html(val);
        });
      }
    });
  },
  agreeWrap: function () {
    $('[data-check-all]').each(function () {
      const target = $(this);
      const connet = target.data('check-all');
      target.find('input').on('change', function () {
        if ($(this).data('no-chg')) return;
        $('[data-check-child=' + connet + ']')
          .find('input')
          .prop('checked', $(this).is(':checked') ? true : false)
          .change();
      });
    });

    $('[data-check-child]').each(function () {
      const target = $(this);
      const parent = $('[data-check-all=' + target.data('check-child') + ']');
      const connet = $('[data-check-child=' + target.data('check-child') + ']');
      const max = connet.length;
      target.find('input').on('change', function () {
        if ($(this).is(':checked')) {
          parent.find('input').prop('checked', max == connet.find('input:checked').length ? true : false);
        } else {
          parent.find('input').prop('checked', false);
        }

        if (parent.data('check-child')) {
          parent.find('input').data('no-chg', true).change().removeData('no-chg');
        }
      });
    });
  },
  init: function () {
    formBox.input();
    formBox.selectInit();
    formBox.select();
    formBox.textarea();
    formBox.agreeWrap();
  }
};

const FormMassege = {
  error: function (target, massege, textTarget) {
    if (massege) {
      if(!textTarget){
        $(target).closest('.formBox').addClass('error');
        $('<div class="errorText"></div>').appendTo($(target).closest('.formBox')).text(massege);
      }else {
        $('<div class="errorText"></div>').appendTo($(textTarget)).text(massege);
      }
    } else {
      $(target).closest('.formBox').removeClass('error').find('.errorText').remove();
    }
  },
  success: function (target, massege) {
    if (massege) {
      $(target).closest('.formBox').addClass('success');
      $('<div class="successText"></div>').appendTo($(target).closest('.formBox')).text(massege);
    } else {
      $(target).closest('.formBox').removeClass('success').find('.successText').remove();
    }
  }
};

/* 토스트 팝업 */
const tostpop = {
  setting : function(){
    if(!$('.tostWrap').length){
      let tostWrap = '<div class="tostWrap"></div>'
      $('body').append(tostWrap);
    }
  },
  open : function(massege,delay){
    let delayTime;
    delay ? delayTime = delay : delayTime = 2000;

    tostpop.setting();

    let text = '';

    text += '<div class="tostBox">' + massege;
    text += '</div>';

    const target = $(text).appendTo('.tostWrap');
    setTimeout(function(){
      target.slideDown();

      // 삭제
      setTimeout(function(){
        target.slideUp(function(){
          target.remove();
        });
      },delayTime);
    },20);
  }
}

const tabWrap = {
  setting: function () {
    $('[data-tab-tit]').each(function () {
      let target = $(this).find('.on').attr('href');
      if (!target) {
        target = $(this).find('.on').data('href');
      }
      if(target.charAt(0) == '#' || (target.charAt(0) == '.' && target.length > 1)){
        if (!$(target).parent('.swiper-wrapper').length) $(target).css('display', 'block').siblings().css('display', 'none');
      }
    });
    $('[data-tab-style]').each(function () {
      tabStyle(this);
    });
    $(window).resize(function () {
      $('[data-tab-style]').each(function () {
        tabStyle(this);
      });
    });

    function tabStyle(t) {
      if (!$(t).find('.tabLine').length) {
        if (!$(t).hasClass('swiperTab')) {
          $(t).addClass('lineType').append('<span class="tabLine"></span>');
        } else {
          $(t).addClass('lineType').find('.swiper-wrapper').append('<span class="tabLine"></span>');
        }
        $(t).find('.tabLine').addClass('off');
        // $(window).load(function () {
        //   $(t).find('.tabLine').removeClass('off');
        // });
      }
      const left = $(t).find('.on').position().left;
      const width = $(t).find('.on').outerWidth();
      const sclL = $(t).scrollLeft();
      const margin = parseFloat($(t).css('margin-left'));
      $(t)
        .find('.tabLine')
        .css({ left: left + sclL + margin, width: width });
    }
  },
  click: function () {
    $(document).on('click', '.accodionBox .tit', function () {
      $(this).closest('.accodionBox').toggleClass('on');
      $(this).closest('.tit').next('.accodionView').slideToggle();
      if (!$(this).closest('.accodionWrap').hasClass('notToggle')) {
        $(this).closest('.accodionWrap').find('.accodionBox').not($(this).closest('.accodionBox')).removeClass('on').find('.accodionView').slideUp();
      }
      return false;
    });

    $(document).on('click', '[data-tab-tit] a', function (e) {
      //e.preventDefault();
      if($(this).closest('.tabList').data('click-hidden')){
        return false;
      }else{
        const name = $(this).prop('tagName');
        let href = '';
        if (name == 'A') href = $(this).attr('href');
        if (name == 'BUTTON') href = $(this).data('href');
  
        if(href.slice(0,1) == '#' || href.slice(0,1) == '.'){
          if ($(href).closest('.tabContWrap').data('tab-cont') == 'swiper') {
            $(href).closest('.tabContWrap')[0].swiper.slideTo($(href).index());
          } else {
            $(href).show().siblings().hide();
          }
          if($(this).parent().hasClass('tab')) {
            $(this).addClass('on').parent().siblings().find('> a').removeClass('on');
          } else {
            $(this).addClass('on').siblings().removeClass('on');
          }
    
          if ($(this).closest('.tabList').data('tab-style') == 'type2') {
            const left = $(this).position().left;
            const width = $(this).outerWidth();
            const sclL = $(this).closest('.tabList').scrollLeft();
            const margin = parseFloat($(this).css('margin-left'));
    
            $(this)
              .siblings('.tabLine').removeClass('off')
              .css({ left: left + sclL + margin, width: width });
          }
          return false;
        }
      }
    });
  },
  swiper: function () {
    if ($('[data-tab-cont=swiper]').length) {
      $('[data-tab-cont=swiper]').each(function () {
        const swiper = new Swiper(this, {
          autoHeight: true
        });
        swiper.on('slideChange', function (target) {
          $(target.el).prev('.tabList').find('a').eq(target.realIndex).addClass('on').siblings().removeClass('on');
        });
      });
    }

    if ($('.swiperTab').length) {
      $('.swiperTab').each(function () {
        const $this = $(this);
        const initIdx = $this.find('.swiper-slide.on').index()-1;
        const swiper = new Swiper(this, {
          slidesPerView: 'auto',
          initialSlide:initIdx,
          on: {
            init: function (e) {
              snapCheck(e);
            }
          }
        });
        swiper.on('slideChange', function (e) {
          snapCheck(e);
        });

        $this.find('.swiper-button-prev').on('click',function(){
          swiper.slidePrev();
          return false;
        });
        $this.find('.swiper-button-next').on('click',function(){
          swiper.slideNext();
          return false;
        });

        function snapCheck(e) {
          if (e.snapIndex == 0) {
            $this.addClass('first');
          } else {
            $this.removeClass('first');
          }
          if (e.snapIndex == e.snapGrid.length - 1) {
            $this.addClass('last');
          } else {
            $this.removeClass('last');
          }
        }
      });
    }
  },
  init: function () {
    tabWrap.setting();
    tabWrap.click();
    tabWrap.swiper();
  }
};

const button = {
  scrollFixed: function () {
    $('.scrollFixed').each(function () {
      const target = $(this);
      const height = target.outerHeight();
      const clone = target.children().clone();
      target.wrapInner('<div>').css('height', height).find('> div').addClass('fixed');

      scrollCheck();
      $(window).on('load',function(){
        scrollCheck();
      });
      setTimeout(function(){
        scrollCheck();
      },50);

      $(window).on('scroll',function () {
        scrollCheck();
      });

      function scrollCheck() {
        const winT = $(window).scrollTop();
        const winH = $(window).outerHeight();
        const winL = $(window).scrollLeft();
        const scrollT = target.offset().top;
        if (winT + winH > scrollT + height) {
          target.find(' > .fixed').removeClass('fixed');
          target.find(' > div .reserveFixedBox').css('transform', 'translateX(0)');
        } else {
          target.find(' > *').addClass('fixed');
          target.find(' > div .reserveFixedBox').css('transform', 'translateX(' + -winL + 'px)');
        }
      }
    });
  },
  tooltip: function () {
    $(document).on('click', '.tooltip', function (e) {
      const winW = $(window).outerWidth();
      const left = $(this).offset().left;
      const space = 20;
      let tipW = 600;
      if ($(this).data('width')) {
        tipW = $(this).data('width');
      }

      const secW = $('.section').outerWidth() - space * 2;
      let addM = 0;
      if (($(this).parent().position().left + 10 - space) / secW > 0.5) {
        addM = 20;
      }
      let tipLeft = -Math.round((($(this).parent().position().left + 10 - space) / secW) * tipW) + addM;

      if ($(this).siblings('.tooltipPop').hasClass('popup')) {
        if (!$('.popupDim').length) {
          $('body').append('<div class="popupDim"></div>').addClass('scrollLock');
        }
      }

      $('.tooltipPop').not($(this).siblings('.tooltipPop')).fadeOut('fast');
      $(this)
        .siblings('.tooltipPop')
        .css({ width: tipW, left: tipLeft, '--tip-left': tipW - tipLeft - tipW + 6 + 'px' });
      $(this).siblings('.tooltipPop').fadeToggle('fast');
      return false;
    });
    $(document).on('click', '.tooltipPop .btnClose', function () {
      $(this).closest('.tooltipPop').fadeOut('fast');
      $('.popupDim').fadeOut('fast', function () {
        $(this).remove();
      });
      $('body').removeClass('scrollLock');
      return false;
    });
  },
  init: function () {
    button.scrollFixed();
    button.tooltip();
  }
};

/* 클릭 모션 */
const clickMotion = function () {
  buttonSetting();
  $(window).load(function () {
    buttonSetting();
  });

  function buttonSetting(){
    $('.button').each(function () {
      const $this = $(this);
      if ($(this).data('no-motion') == undefined) {
        if (!$this.find('.textOver').length) {
          const text = $this.text();
          $this.text('');
          $('<div class="textOver"><div></div></div>').appendTo($this).find('>div').text(text);
        }
      }
    });
  }

  $(document).on('click', '.hoverMotion, .button', function (e) {
    const $this = $(this),
      $delay = 650;

    if ($(this).data('no-motion') == undefined) {
      if (!$this.find('.click-in').length) $this.prepend('<i class="click-in"></i>');
      $this.css('overflow', 'hidden');
      const btnIn = $this.find('.click-in'),
        btnMax = Math.max($this.outerWidth(), $this.outerHeight()),
        btnX = e.pageX - $this.offset().left - btnMax / 2,
        btnY = e.pageY - $this.offset().top - btnMax / 2;

      btnIn.css({ left: btnX, top: btnY, width: btnMax, height: btnMax }).addClass('animate');

      if (!$this.find('.textOver').length) {
        const text = $this.text();
        $this.text('');
        $('<div class="textOver"><div></div></div>').appendTo($this).find('>div').text(text);
      }
    }

    // setTimeout(function () {
    //   $this.find('.click-in').remove();
    // }, 500);
  });
  $(document).on('mouseleave', '.hoverMotion, .button', function (e) {
    $(this).removeAttr('style');
    $(this).find('.click-in').remove();
  });
};

/* 내용불러오기 */
const include = {
  load: function () {
    const $include = $('[data-include]');
    $include.each(function (i, el) {
      const $this = $(this);
      const src = $this.data('include');
      $this.load(src, function () {
        $this.removeAttr('data-include');
        if ($this.attr('id') === 'headerWrap') {
          if ($('#container').data('title')) {
            const $title = $('#container').data('title');
            const $headTitle = document.title;
            if ($this && $this !== '') {
              document.title = $title + ' | ' + $headTitle;
            }
          }
        }
        // 탭 활성화
        if ($this.data('tab-action') === 0 || $this.data('tab-action')) {
          let idx = 0;
          if (window.localStorage.tabIndex) {
            idx = window.localStorage.tabIndex;
          } else {
            idx = window.localStorage.setItem('tabIndex', $this.data('tab-action'));
          }
          $this.find('[data-tab-box]').children().eq(idx).addClass('on');
          tabWrap.setting();

          setTimeout(function () {
            window.localStorage.setItem('tabIndex', $this.data('tab-action'));
            $this.find('.tabLine').removeClass('off');
            let idx = $this.data('tab-action');
            const winW = $(window).outerWidth();
            const target = $this.find('[data-tab-box]').children().eq(idx);
            const scrollLeft = target.offset().left;
            const scrollWidth = target.outerWidth();

            $this.find('[data-tab-box]').children().eq(idx).addClass('on').siblings().removeClass('on');
            if (winW < scrollLeft + scrollWidth) {
              $this.find('.tabList').scrollLeft(scrollLeft - winW + scrollWidth + 20);
            }
            tabWrap.setting();
          }, 100);
        }
      });
    });
  },
  init: function () {
    include.load();
    $(window).load(function () {
      include.load();
    });
  }
};

/* 팝업 */
const layerPopup = {
  click: function () {
    $(document).on('click', '.popOpen', function () {
      const $this = $(this);
      let href = $this.attr('href');
      let style = '';
      if ($this.data('pop-style') != 'morphing') {
        if ($this.data('pop-style')) {
          style = $this.data('pop-style');
        }
        if (!href) {
          href = $this.data('href');
        }
        layerPopup.open(href, $this, style);
      } else {
        let max = Math.min($this.outerWidth(), $this.outerHeight());

        $this.css({ '--min-size': max * 0.1 + 'rem' }).addClass('morphing action');
      }
      return false;
    });
  },
  open: function (target, el, style) {
    const cont = $(target).find('.layerPopCont');
    /* 팝업 스타일 정의 */
    $(target).removeClass('bottom full').addClass(style);

    setTimeout(function () {
      $(target).addClass('on');
    }, 150);

    setTimeout(function () {
      cont.focus();
    }, 30);
    $('body').addClass('scrollLock');

    cont
      .find('.btnPopClose')
      .last()
      .on('keydown', function (e) {
        var code = e.which;
        if (code == 9) {
          $(this).closest('.layerPopCont').focus();
        }
      });
    layerPopup.close(target, el);

    $('#container').attr('aria-hidden', 'true');
    $(target).attr('aria-hidden', 'false');
  },
  close: function (target, reTarget) {
    $(target).off('click');
    $(target).find('.btnPopClose').off('click');

    $(target)
      .find('.btnPopClose')
      .on('click', function () {
        layerPopup.actionClose(target, reTarget);
        return false;
      });
    $(target).on('click', function (e) {
      if($(e.originalEvent.target).data('dim-close') === undefined){
        if ($(e.originalEvent.target).hasClass('layerPopWrap')) {
          layerPopup.actionClose(target, reTarget);
        }
      }
    });
  },
  actionClose: function (target, reTarget) {
    let btnTarget = reTarget ? reTarget : '';
    $(target).removeClass('on');
    $('body').removeClass('scrollLock');

    if (reTarget) btnTarget.focus();

    /* */
    $('#container').removeAttr('aria-hidden');
    $(target).removeAttr('aria-hidden');
  },
  morphing: function () {},
  init: function () {
    layerPopup.click();
  }
};

/* 동작 인터렉션 */
const animation = {
  scrollAni: function () {
    const $elements = $('*[data-animation]');
    let h = $(window).height();
    $elements.each(function (i, el) {
      const $el = $(el);
      const animationClass = $el.data('animation').split(',');

      $el.waypoint(
        function (i) {
          h = $(window).height();
          if (i == 'up') {
            animation.scrollDD('remove', $el, animationClass);
          }
          if (i == 'down') {
            animation.scrollDD('add', $el, animationClass);
          }
        },
        { offset: animation.waypointerCheck($el)[0] + '%', triggerOnce: animation.waypointerCheck($el)[1] }
      );
    });
  },

  scrollDD: function (i, target, name, idx) {
    if (i == 'add') {
      target.addClass('animated ' + name[0]);
      if (name[1]) {
        target.css({ '-webkit-animation-delay': name[1] + 'ms', 'animation-delay': name[1] + 'ms' });
      }
      if (name[2]) {
        target.css({ '-webkit-animation-duration': name[2] + 'ms', 'animation-duration': name[2] + 'ms' });
      }

      if (target.parent().data('child-repeat')) {
        const repeat = target.parent().data('child-repeat');
        let delay = name[1];
        if (repeat > idx) {
          delay = name[1] * idx;
        } else {
          idx = idx % repeat;
          delay = name[1] * idx;
        }
        if (name[1]) {
          target.css({ '-webkit-animation-delay': delay + 'ms', 'animation-delay': delay + 'ms' });
        }
      }
    } else if (i == 'remove') {
      target.removeClass('animated ' + name[0]);
    }
  },
  waypointerCheck: function (target) {
    let Wpoint = 100;
    let Wonce = false;
    if (target.data('waypoint-point')) Wpoint = target.data('waypoint-point');
    if (target.data('waypoint-once')) Wonce = target.data('waypoint-once');

    return [Wpoint, Wonce];
  },

  addComma: function (num) {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
  },

  // scrollObservers:function(){
  // 	let observer = new IntersectionObserver(entries => {
  // 		entries.forEach(entry => {
  // 			const target = entry.target;
  // 			const aniInfo = $(target).data('animation').split(',');
  // 			if(!entry.isIntersecting) {
  // 				$(target).removeClass('animated ' + aniInfo[0]);
  // 				return
  // 			};
  // 			$(target).addClass('animated ' + aniInfo[0]);
  // 		})
  // 	});
  // 	const ani = document.querySelectorAll('[data-animation]');
  // 	ani.forEach(elem => observer.observe(elem))
  // },

  imgSetting: function () {
    const $elements = $('*[data-animation]');
    $elements.each(function (i, el) {
      const name = $(this).data('animation');
      if (name.indexOf('imgMotion') !== -1) {
        $(this).append('<span class="motion"></span>');
      }
    });
  },
  init: function () {
    animation.scrollAni();
  }
};

const ui = {
  alert : function(options){
    let settings = $.extend(
      {
        target: '#alert',
        noIcon: false,
        buttons: 1,
        buttonText: ['확인'],
        buttonClose: 1,
        text: 'alert내용입니다 <br /> html 태그로 넣어주시면 됩니다.',
        textAlign: 'center',
        dimClose:false,
        submit: function () {
          console.log('전송버튼호출');
        },
        close: function () {
          console.log('닫기버튼호출');
        }
      },
      options
    );

    const _this = settings.target;

    layerPopOpen(_this);

    function layerPopOpen(target) {
      layerPopAppend(target);
      $('body').addClass('scrollLock');

      setTimeout(function () {
        $(target).addClass('on');
      }, 10);

      setTimeout(function () {
        $(target).find('.layerPopCont').focus();
      }, 30);

      $(target)
        .find('.btnPopClose')
        .last()
        .on('keydown', function (e) {
          const code = e.which;
          if (code == 9) {
            $(this).closest('.layerPopCont').focus();
          }
        });

      $(target).find('.btnSubmit').on('click', settings.submit);
      $(target).find('.btnPopClose').on('click', settings.close);

      layerPopClose(target);

      /* */
      $('#container').attr('aria-hidden', 'true');
      $(target).attr('aria-hidden', 'false');
    }

    function layerPopClose(target) {
      $(target)
        .find('.btnSubmit')
        .on('click', function () {
          close($(this));
          return false;
        });
      $(target)
        .find('.btnPopClose')
        .on('click', function () {
          close($(this));
          return false;
        });

      if(settings.dimClose){
        $(document).on('click', target, function (e) {
          if ($(e.originalEvent.target).hasClass('layerPopWrap')) {
            $(target).find('.btnPopClose:last').trigger('click');
            $(document).off('click', target);
            close($(this));
          }
        });
      }

      function close(t) {
        const $this = t;
        $this.closest('.layerPopWrap').removeClass('on');
        $('body').removeClass('scrollLock');

        $(target).find('.btnSubmit').off('click');
        $(target).find('.btnPopClose').off('click');

        setTimeout(function () {
          $(target).remove();
        }, 300);

        /* */
        $('#container').removeAttr('aria-hidden');
        $this.closest('.layerPopWrap').removeAttr('aria-hidden');
      }
    }

    function layerPopAppend(target) {
      $('body').append(layerPopHtml(target));
      $(target).find('.textBox').css('text-align', settings.textAlign);
      $(target)
        .find('.btnPopGroup button')
        .eq(settings.buttonClose - 1)
        .addClass('btnPopClose')
        .siblings()
        .addClass('btnSubmit');
    }

    function layerPopHtml(target) {
      let $layout = '<div id="' + target.replace('#', '') + '" class="layerPopWrap alertPop">';
      $layout += '<div class="bg"></div>';
      $layout += '<div class="layerPopCont" tabindex="0">';
      $layout += '<div class="contBox">';
      $layout += '<div class="textBox">' + settings.text + '</div>';
      $layout += '<div class="btnPopGroup">';
      if (settings.buttons == 1) {
        $layout += '<button class="button small btnPopClose">' + settings.buttonText + '</button>';
      } else {
        $layout += '<button class="button line small btnPopClose">' + settings.buttonText[0] + '</button><button class="button small btnSubmit">' + settings.buttonText[1] + '</button>';
      }
      $layout += '</div></div></div></div>';
      return $layout;
    }
  }
};
