function weekday($day) {
    switch ($day) {
      case 0:
        return "Saturday";
        break;
      case 1:
        return "Monday";
        break;
      case 2:
        return "Tuesday";
        break;
      case 3:
        return "Wednesday";
        break;
      case 4:
        return "Thursday";
        break;
      case 5:
        return "Friday";
        break;
      case 6:
        return "Sunday";
        break;
      default:
        return "Free day";
    }
  }
  const day = new Date();
  const dayweek= day.getDay();

angular.module("DemoApp", []).controller("DemoController", function ($scope) {
  $scope.tutorialName = "Angular Js";
  const today = weekday(dayweek);
  $scope.weekday = today;
});


