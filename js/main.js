function showSubpage(pageId) {
  var subpages = document.getElementsByClassName("subpage");
  for (var i = 0; i < subpages.length; i++) {
      subpages[i].style.display = "none";
  }

  var currentPage = document.getElementById(pageId);
  currentPage.style.display = "block";
}


function copyToClipboard() {
  var url = "https://dqt1010.github.io";
  
  navigator.clipboard.writeText(url)
    .then(function() {
      alert('已将网址复制到剪贴板');
    })
    .catch(function(err) {
      console.error('无法复制到剪贴板: ', err);
    });
}



let rotationInterval;

function startRotation(element) {
  rotationInterval = setInterval(function() {
    rotateElement(element);
  }, 10);
}

function stopRotation(element) {
  clearInterval(rotationInterval);
  rotateToInitialPosition(element);
}

function rotateElement(element) {
  let currentRotation = getRotationDegrees(element);
  element.style.transform = `rotate(${currentRotation + 1}deg)`;
}

function rotateToInitialPosition(element) {
  element.style.transition = 'transform 0.0000000000001ms';
  element.style.transform = 'rotate(0deg)';
}

function getRotationDegrees(element) {
  let style = window.getComputedStyle(element);
  let matrix = style.getPropertyValue('transform');
  if (matrix !== 'none') {
    let values = matrix.split('(')[1].split(')')[0].split(',');
    let a = values[0];
    let b = values[1];
    let angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    return angle < 0 ? angle + 360 : angle;
  } else {
    return 0;
  }
}




(() => {
  var e = {
    193: e => {
      e.exports = function (e, t) {
        window[t] = e
      }
    }
    ,
    28: () => {
      window.ReqFrame = window.requestAnimationFrame;
      var e, t, o, n, i = document.getElementById("StarStage"), r = i.getContext("2d"), d = 2e3, a = "0." + Math.floor(10 * Math.random()) + 1, w = 2 * i.width, h = [];
      function s() {
        for (e = i.width / 2,
          t = i.height / 2,
          h = [],
          n = 0; n < d; n++)
          o = {
            x: Math.random() * i.width,
            y: Math.random() * i.height,
            z: Math.random() * i.width,
            o: "0." + Math.floor(99 * Math.random()) + 1
          },
            h.push(o)
      }
      s(),
        function u() {
          ReqFrame(u),
            function () {
              for (n = 0; n < d; n++)
                (o = h[n]).z--,
                  o.z <= 0 && (o.z = i.width)
            }(),
            function () {
              var u, m, f;
              for (i.width == window.innerWidth && i.width == window.innerWidth || (i.width = window.innerWidth,
                i.height = window.innerHeight,
                s()),
                r.clearRect(0, 0, i.width, i.height),
                r.fillStyle = "rgba(209, 255, 255, " + a + ")",
                n = 0; n < d; n++)
                u = ((o = h[n]).x - e) * (w / o.z),
                  u += e,
                  m = (o.y - t) * (w / o.z),
                  m += t,
                  f = w / o.z * 1,
                  r.fillRect(u, m, f, f),
                  r.fillStyle = "rgba(209, 255, 255, " + o.o + ")"
            }()
        }()
    }
    ,
    /*isc的屏幕拖拽器，没必要抄*/
    659: (e, t, o) => {
      const n = o(193);
      var i = {
        MouseX: 0,
        MouseY: 0,
        MouseDown: !1
      };
      window.addEventListener("mousemove", (e => {
        i.MouseX = e.clientX,
          i.MouseY = e.clientY
      }
      )),
        window.addEventListener("mousedown", (() => {
          i.MouseDown = !0
        }
        )),
        window.addEventListener("mouseup", (() => {
          i.MouseDown = !1
        }
        )),
        n(i, "MouseInfo")
    }
    ,
    322: (e, t, o) => {
      const n = o(193)
        , i = document.getElementById("PageContent");
      var r = 0;
      window.addEventListener("mousemove", (e => {
        MouseInfo.MouseDown && (r -= .05 * e.movementX,
          i.style.transform = `rotateX(-20deg) rotateY(${r}deg)`)
      }
      )),
        n(r, "CurrentY")
    }
  }
    , t = {};
  function o(n) {
    var i = t[n];
    if (void 0 !== i)
      return i.exports;
    var r = t[n] = {
      exports: {}
    };
    return e[n](r, r.exports, o),
      r.exports
  }
  o(28),
    o(659),
    o(322)
}
)();