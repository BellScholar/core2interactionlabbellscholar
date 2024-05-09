(function() {
  var $hour, $humanTime, $minutes, $seconds, clockHeight, formatTime, getTime, renderTime, t, updateTime;

  $seconds = $('.seconds .time');

  $minutes = $('.minutes .time');

  $hour = $('.hour .time');

  $humanTime = $('#human-time');

  clockHeight = $('#bar-clock .hour').height();

  // Returns a current time object
  getTime = function() {
    var dateTime;
    dateTime = new Date();
    return {
      
      // Time object
      hour: dateTime.getHours(),
      minutes: dateTime.getMinutes(),
      seconds: dateTime.getSeconds()
    };
  };

  // Set column height based on time
  renderTime = function($el, time, duration) {
    var percentage;
    percentage = (clockHeight * time) / duration;
    $el.height(function() {
      return percentage;
    });
    return $el.css('background-color', `hsl(${percentage}, 50%, 50%)`);
  };

  // Format time at 2 digits
  formatTime = function(time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  };

  // The master function MASTER! MASTER!
  updateTime = function(time) {
    renderTime($seconds, time.seconds, 59);
    renderTime($minutes, time.minutes, 59);
    renderTime($hour, time.hour, 23);
    
    // Readable time for puny human beings
    return $humanTime.text(function() {
      var separator;
      separator = ' ';
      return formatTime(time.hour) + separator + formatTime(time.minutes) + separator + formatTime(time.seconds);
    });
  };

  // It keeps everything running
  t = setInterval(function() {
    return updateTime(getTime());
  }, 1000);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLEtBQUEsRUFBQSxVQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxXQUFBLEVBQUEsVUFBQSxFQUFBLE9BQUEsRUFBQSxVQUFBLEVBQUEsQ0FBQSxFQUFBOztFQUFBLFFBQUEsR0FBYyxDQUFBLENBQUUsZ0JBQUY7O0VBQ2QsUUFBQSxHQUFjLENBQUEsQ0FBRSxnQkFBRjs7RUFDZCxLQUFBLEdBQWMsQ0FBQSxDQUFFLGFBQUY7O0VBQ2QsVUFBQSxHQUFjLENBQUEsQ0FBRSxhQUFGOztFQUNkLFdBQUEsR0FBYyxDQUFBLENBQUUsa0JBQUYsQ0FBcUIsQ0FBQyxNQUF0QixDQUFBLEVBSmQ7OztFQU9BLE9BQUEsR0FBVSxRQUFBLENBQUEsQ0FBQTtBQUNWLFFBQUE7SUFBRSxRQUFBLEdBQVcsSUFBSSxJQUFKLENBQUE7V0FHWCxDQUFBOzs7TUFBQSxJQUFBLEVBQVMsUUFBUSxDQUFDLFFBQVQsQ0FBQSxDQUFUO01BQ0EsT0FBQSxFQUFTLFFBQVEsQ0FBQyxVQUFULENBQUEsQ0FEVDtNQUVBLE9BQUEsRUFBUyxRQUFRLENBQUMsVUFBVCxDQUFBO0lBRlQ7RUFKUSxFQVBWOzs7RUFnQkEsVUFBQSxHQUFhLFFBQUEsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLFFBQVosQ0FBQTtBQUNiLFFBQUE7SUFBRSxVQUFBLEdBQWEsQ0FBQyxXQUFBLEdBQWMsSUFBZixDQUFBLEdBQXVCO0lBQ3BDLEdBQUcsQ0FBQyxNQUFKLENBQVcsUUFBQSxDQUFBLENBQUE7YUFBRztJQUFILENBQVg7V0FDQSxHQUFHLENBQUMsR0FBSixDQUFRLGtCQUFSLEVBQTRCLENBQUEsSUFBQSxDQUFBLENBQU8sVUFBUCxDQUFBLFdBQUEsQ0FBNUI7RUFIVyxFQWhCYjs7O0VBc0JBLFVBQUEsR0FBYSxRQUFBLENBQUMsSUFBRCxDQUFBO0lBQVUsSUFBRyxJQUFBLEdBQU8sRUFBVjthQUFrQixHQUFBLEdBQU0sS0FBeEI7S0FBQSxNQUFBO2FBQWtDLEtBQWxDOztFQUFWLEVBdEJiOzs7RUF5QkEsVUFBQSxHQUFhLFFBQUEsQ0FBQyxJQUFELENBQUE7SUFDWCxVQUFBLENBQVcsUUFBWCxFQUFxQixJQUFJLENBQUMsT0FBMUIsRUFBbUMsRUFBbkM7SUFDQSxVQUFBLENBQVcsUUFBWCxFQUFxQixJQUFJLENBQUMsT0FBMUIsRUFBbUMsRUFBbkM7SUFDQSxVQUFBLENBQVcsS0FBWCxFQUFxQixJQUFJLENBQUMsSUFBMUIsRUFBbUMsRUFBbkMsRUFGRjs7O1dBS0UsVUFBVSxDQUFDLElBQVgsQ0FBZ0IsUUFBQSxDQUFBLENBQUE7QUFDbEIsVUFBQTtNQUFJLFNBQUEsR0FBWTthQUNaLFVBQUEsQ0FBVyxJQUFJLENBQUMsSUFBaEIsQ0FBQSxHQUEyQixTQUEzQixHQUNBLFVBQUEsQ0FBVyxJQUFJLENBQUMsT0FBaEIsQ0FEQSxHQUMyQixTQUQzQixHQUVBLFVBQUEsQ0FBVyxJQUFJLENBQUMsT0FBaEI7SUFKYyxDQUFoQjtFQU5XLEVBekJiOzs7RUFzQ0EsQ0FBQSxHQUFJLFdBQUEsQ0FBWSxRQUFBLENBQUEsQ0FBQTtXQUNWLFVBQUEsQ0FBVyxPQUFBLENBQUEsQ0FBWDtFQURVLENBQVosRUFFRSxJQUZGO0FBdENKIiwic291cmNlc0NvbnRlbnQiOlsiJHNlY29uZHMgICAgPSAkKCcuc2Vjb25kcyAudGltZScpXG4kbWludXRlcyAgICA9ICQoJy5taW51dGVzIC50aW1lJylcbiRob3VyICAgICAgID0gJCgnLmhvdXIgLnRpbWUnKVxuJGh1bWFuVGltZSAgPSAkKCcjaHVtYW4tdGltZScpXG5jbG9ja0hlaWdodCA9ICQoJyNiYXItY2xvY2sgLmhvdXInKS5oZWlnaHQoKVxuXG4jIFJldHVybnMgYSBjdXJyZW50IHRpbWUgb2JqZWN0XG5nZXRUaW1lID0gLT5cbiAgZGF0ZVRpbWUgPSBuZXcgRGF0ZSgpXG4gIFxuICAjIFRpbWUgb2JqZWN0XG4gIGhvdXI6ICAgIGRhdGVUaW1lLmdldEhvdXJzKClcbiAgbWludXRlczogZGF0ZVRpbWUuZ2V0TWludXRlcygpXG4gIHNlY29uZHM6IGRhdGVUaW1lLmdldFNlY29uZHMoKVxuXG4jIFNldCBjb2x1bW4gaGVpZ2h0IGJhc2VkIG9uIHRpbWVcbnJlbmRlclRpbWUgPSAoJGVsLCB0aW1lLCBkdXJhdGlvbikgLT5cbiAgcGVyY2VudGFnZSA9IChjbG9ja0hlaWdodCAqIHRpbWUpIC8gZHVyYXRpb25cbiAgJGVsLmhlaWdodCAtPiBwZXJjZW50YWdlXG4gICRlbC5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBcImhzbCgje3BlcmNlbnRhZ2V9LCA1MCUsIDUwJSlcIilcblxuIyBGb3JtYXQgdGltZSBhdCAyIGRpZ2l0c1xuZm9ybWF0VGltZSA9ICh0aW1lKSAtPiBpZiB0aW1lIDwgMTAgdGhlbiBcIjBcIiArIHRpbWUgZWxzZSB0aW1lXG5cbiMgVGhlIG1hc3RlciBmdW5jdGlvbiBNQVNURVIhIE1BU1RFUiFcbnVwZGF0ZVRpbWUgPSAodGltZSkgLT5cbiAgcmVuZGVyVGltZSAkc2Vjb25kcywgdGltZS5zZWNvbmRzLCA1OVxuICByZW5kZXJUaW1lICRtaW51dGVzLCB0aW1lLm1pbnV0ZXMsIDU5XG4gIHJlbmRlclRpbWUgJGhvdXIsICAgIHRpbWUuaG91ciwgICAgMjNcbiAgXG4gICMgUmVhZGFibGUgdGltZSBmb3IgcHVueSBodW1hbiBiZWluZ3NcbiAgJGh1bWFuVGltZS50ZXh0IC0+XG4gICAgc2VwYXJhdG9yID0gJyAnXG4gICAgZm9ybWF0VGltZSh0aW1lLmhvdXIpICAgICsgc2VwYXJhdG9yICsgXG4gICAgZm9ybWF0VGltZSh0aW1lLm1pbnV0ZXMpICsgc2VwYXJhdG9yICsgXG4gICAgZm9ybWF0VGltZSh0aW1lLnNlY29uZHMpXG5cbiMgSXQga2VlcHMgZXZlcnl0aGluZyBydW5uaW5nXG50ID0gc2V0SW50ZXJ2YWwoLT4gXG4gICAgICB1cGRhdGVUaW1lKGdldFRpbWUoKSlcbiAgICAsIDEwMDApIl19
//# sourceURL=coffeescript

const textList = [
  "I can't take my eyes off you - Onestar",
  "Alone - Parc Jae Jung",
  "Every Moment of you - Sung Si Kyung",
  "He' Story - Nilo",
  "First Line - Shin Yong Jae",
  "Hello - Onestar",
  "The Way To Say Goodbye - Onestar",
  "Get Ready To Leave - Onestar",
  "I Know But - Joon Il Jung",
  "More Than One Day - Joon Il Jung",
  "I Loved You - Parc Jae Jung",
  "Try - Park Won",
  "Eternal Sunshine - Kyuhyun",
  "On A Rainy Night - Onestar",
  "How love is - K.Will",
  "Father - Solji",
  "As much as I loved you - Parc Jae Jung",
  "Promise - HYB"
];

function getRandomText() {
  const randomIndex = Math.floor(Math.random() * textList.length);
  return textList[randomIndex];
}

function updateRandomText() {
  const randomTextElement = document.getElementById('random-text');
  randomTextElement.textContent = getRandomText();
}

// Update text initially
updateRandomText();

// Update text every 4 minutes (240,000 milliseconds)
setInterval(updateRandomText, 240000);

document.getElementById("navigateButton").addEventListener("click", function() {
  window.location.href = 'https://bellscholar.github.io/bellscholar/Time-based Website/about/index.html';
});
