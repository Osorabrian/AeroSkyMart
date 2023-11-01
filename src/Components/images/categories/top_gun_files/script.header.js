/** Shopify CDN: Minification failed

Line 48:6 Transforming const to the configured target environment ("es5") is not supported yet

**/
document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
function MenuHeight (container) {
  var hdr = document.getElementById('header-toolbar');
  var stky = hdr.getAttribute('data-sticky');  
  if (stky == 'true') {
    document.selectors = {
      sht: hdr.offsetHeight
    };
  } else {
    document.selectors = {
      sht: 0
    };
  };  
  var sN = container.querySelector('.sticky-navigation-container').offsetHeight;
  var iH = window.innerHeight;
  var cD = document.getElementById('cart-dropdown');
  var rM = container.querySelector('.responsiveMenu');
  if (cD) {
    cD.style.maxHeight = iH - sN - 60 + 'px';
  }
  rM.style.maxHeight = iH - sN - 20 + 'px';
  if (rM.classList.contains('isDesktop')) {
    var pLu = rM.querySelectorAll('.parent-level-ul');
    pLu.forEach(function(p) {
      if (p) {
        p.style.maxHeight = iH - parseInt(document.selectors.sht) - 40 + 'px'; 
      }
    });
  }
};
theme.Header = (function() {
  function Header(container) {
    var sectionId = container.getAttribute('data-section-id');
    var dD = container.getAttribute('data-dropdown');
    var t = container.querySelector('.toggleMenu');
    var r = container.querySelector('.responsiveMenu');
    var hS = container.querySelector('#header-navigation .search details');
    var cCM = document.getElementById('cart-count-mobile');
    var cCMa = cCM.querySelector('.cart-count-mobile');
    var cCMb = container.querySelector('#cart-dropdown .modal-close');
    var m = container.getAttribute('data-multi');
    function menuWidth() {      
      const pL = document.querySelectorAll('.visually-hidden li');
      theme.nW = 0;
      pL.forEach(function(p) {
        theme.nW += p.offsetWidth + 5;
      });
    }
    if(dD == 'true'){
      theme.dropdown = true;
    } else {
      theme.dropdown = false;
    }
    theme.cart = false;
    if(('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)){
      theme.detectmob = true;
    } else {
      theme.detectmob = false;
    }
    function menuAdjust() {
      var iW = document.body.scrollWidth;
      var nW = theme.nW;
      var mMW = parseInt(document.querySelector('.responsiveMenu').getAttribute('data-maxmobilewidth'));
      var aS = iW - 40;
      var lW = parseInt(container.getAttribute('data-logo-width'));
      var tW = aS - lW;      
      if (nW > tW) {
        theme.updateNav = true;
      } else {
        theme.updateNav = false;
      }
      var tM = document.querySelector('.toggleMenu');
      var rM = document.querySelector('.responsiveMenu');
      var cD = document.getElementById('cart-dropdown');
      var cCM = document.getElementById('cart-count-mobile');
      var cCD = document.getElementById('cart-count-desktop');
      var rMl = rM.querySelectorAll('li');
      var dO = document.querySelectorAll('.open-container.desktop > details');
      if (theme.detectmob) { 
        document.body.classList.add('true-mobile');
      }
      if (iW <= 583) {
        dO.forEach(function(d) {
          d.open = false;
        });
      } else {
        dO.forEach(function(d) {
          d.open = true;
        });
      }
      if (iW <= mMW || theme.updateNav || theme.detectmob) { 
        tM.classList.remove('isDesktop');
        tM.classList.add('isMobile');
        if (!tM.classList.contains('active')) {
          rM.style.display = 'none';
        } else {
          rM.style.display = 'block';
        }
        rM.classList.remove('isDesktop');
        rM.classList.add('isMobile');
        var pLu = rM.querySelectorAll('.parent-level-ul');
        pLu.forEach(function(p) {
          p.removeAttribute('style')
        });
        rMl.forEach(function(r) {
          r.onmouseenter = function(ev){
            return false;
          };      
          r.onmouseleave = function(ev){
            return false;
          };
          r.classList.remove('isDesktop');
          r.classList.add('isMobile');
        });
        var rMp = rM.querySelectorAll('li.has-dropdown a.parent');
        rMp.forEach(function(r) {
          r.onclick = function(ev){
            var pE = r.parentElement;
            if((r.getAttribute('href') != 'undefined') && r.getAttribute('href') != '#' && ev.target.matches('span')){          
            } else {
              ev.preventDefault();
              pE.classList.toggle('hover');
              pE.querySelector('a.parent').toggleAttribute('aria-expanded');
            }
          };
        });
        if (cD) {
          cCM.appendChild(cD);
        };
        theme.mobile = true;
        document.body.classList.remove('desktop-only');
        document.body.classList.add('mobile-only');        
      } else if (iW > mMW) {
        var hoverTimeout;    
        tM.classList.remove('isMobile');
        tM.classList.add('isDesktop');
        rM.style.display = 'block';
        rM.classList.remove('isMobile');
        rM.classList.add('isDesktop');
        rMl.forEach(function(r) {
          r.classList.remove('hover','isMobile');
          r.classList.add('isDesktop');
        });
        var rMp = rM.querySelectorAll('li.parent');
        rMp.forEach(function(r) {
          r.onmouseenter = function(ev){
            var rMh = rM.querySelectorAll('li.hover');
            rMh.forEach(function(r) {
              r.classList.remove('hover');
            });
            clearTimeout(hoverTimeout);
            r.classList.add('hover');
            r.querySelector('a.parent').setAttribute('aria-expanded','true');
          };      
          r.onmouseleave = function(ev){
            hoverTimeout = setTimeout(function() {
              r.classList.remove('hover');
              r.querySelector('a.parent').setAttribute('aria-expanded','false');
            },250);
          };
          r.addEventListener('keydown', e => {
            if (32 <= e.keyCode && e.keyCode <= 40) {
              e.preventDefault();
              e.stopPropagation();
              switch (e.keyCode) {
                case 32:
                  r.classList.toggle('key');
                  break;
                case 38:
                  r.classList.remove('key');
                  break;
                case 40:
                  r.classList.add('key');
                  break;
              }
            }
          });
        });
        if (cD) {
          cCD.appendChild(cD);
        };
        theme.mobile = false;
        document.body.classList.remove('mobile-only');
        document.body.classList.add('desktop-only');
      }
    }    
    if (location.pathname == '/challenge') {
      window.location.hash = '';
      window.scrollTo(0, 0);      
    } else if (window.location.hash) {
      setTimeout(function () {
        var hsh = location.hash;
        var hc = document.querySelector(hsh);
        if (!hc) {
          return;
        }
        var s = hc.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({top:s-document.selectors.sht, behavior: 'smooth'});
      }, 1);
    } else if (window.location.href.indexOf('customer_posted') > -1 || window.location.href.indexOf('contact?contact_posted') > -1) {
      if (document.cookie.split('AveForm=popUp').length == 1) {
        MenuHeight(container);
        var fb = document.querySelector('.feedback'); 
        if (!fb) {
          return; 
        }
        var s = fb.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({top:s-document.selectors.sht, behavior: 'smooth'});
      }
    }    
    t.onclick = function(ev){
      ev.preventDefault();
      t.classList.toggle('active');
      if (r.style.display === 'none') {
        r.style.display = 'block';
        t.setAttribute('aria-expanded','true');
      } else {
        r.style.display = 'none';
        t.setAttribute('aria-expanded','false');
      }
      document.body.classList.toggle('modal-active');
      document.body.classList.toggle('no-scroll');
      if (hS) {
        hS.open = false;
      }
      cCM.classList.remove('hover');
      if (cCMb && document.getElementById('cart-dropdown')) {
        container.querySelector('#cart-dropdown .modal-close').classList.add('hidden');
      }
    }
    if(theme.dropdown == true){
      cCMa.onclick = function(ev){
        cCM.classList.toggle('hover');
        if (cCMb && document.getElementById('cart-dropdown')) {
          container.querySelector('#cart-dropdown .modal-close').classList.add('hidden');
        }
        if (cCMa.classList.contains('void')) {
          ev.preventDefault();
        }
      }
    };
    var sT = document.querySelector('.skip-to');
    function wS(){
      menuAdjust();
      if(document.body.classList.contains('desktop-only')){
        t.classList.remove('active');
        document.body.classList.remove('no-scroll');
        document.body.style.position = '';
        document.body.style.left = 'auto';
        document.body.style.right = 'auto';
        document.body.style.top = 'auto';
      };
    }
    var cW = window.innerWidth;
    window.addEventListener('resize', function() {
      MenuHeight(container);      
      if (cW == window.innerWidth) {
        return;
      }
      cW = window.innerWidth;
      wS();
    });
    menuWidth();
    menuAdjust();
    MenuHeight(container);    
    theme.multiHead = m;
    if (theme.multiHead == 'true') {
      Multi();
    }
    var el = document.querySelectorAll('.open-container.search details');
    el.forEach(function(e) {
      e.onclick = function(ev){
        var moR = container.querySelector('.mobile-only .responsiveMenu');
        cCM.classList.remove('hover');
        if(t.classList.contains('active')) {
          t.classList.remove('active');
          moR.style.display = 'none';
          moR.classList.remove('active');
          document.body.classList.remove('no-scroll');
          document.body.classList.remove('modal-active');
          document.body.style.position = '';
          document.body.style.left = 'auto';
          document.body.style.right = 'auto';
          document.body.style.top = 'auto';
        }
        var sF = e.querySelector('.search-field');
        setTimeout(function () {
          if (e.hasAttribute('open')) {
            sF.focus();
          } else {
            sF.blur();
          }
        }, 0);
        if (e.hasAttribute('open')) {
          sF.blur();
        } else {
          sF.focus();
        }
      }
    });
    var cL = container.querySelectorAll('.customer-links ul li:not(.search)');
    cL.forEach(function(c) {
      c.addEventListener('keydown', e => {
        if (32 <= e.keyCode && e.keyCode <= 40) {
          e.preventDefault();
          e.stopPropagation();
          switch (e.keyCode) {
            case 32:
              c.classList.toggle('key');
              break;
            case 38:
              c.classList.remove('key');
              break;
            case 40:
              c.classList.add('key');
              break;
          }
        }
      });
    });    
    LiveSearch(container);
  }
  return Header;
})();