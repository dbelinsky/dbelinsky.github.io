class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.intervalId = null;
    }
    addClock(time, callback) {
      if (!tima || !callback) {
        throw new Error("Отсутствуют обязательные аргументы");
      }
      if (this.alarmCollection.find((alarm) => alarm.time === time)) {
        console.warn("Уже присутствует звонок на это же время");
      }
      const alarmTime = {
        callback: callback,
        time: time,
        canCall: true
      };
      this.alarmCollection.push(alarmTime);
    }
    removeClock(time) {
      this.alarmCollection = this.alarmCollection.filter(
        (item) => item.time != time
      );
    }
    getCurrentFormattedTime() {
      return new Date().toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit"
      });
    }
  
    start() {
      if (this.intervalId != null) {
        return;
      }
      this.intervalId = setInterval(
        () =>
          this.alarmCollection.forEach((alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()) {
              alarm.canCall = false;
              alarm.callback();
            }
          }),
        1000
      );
    }
    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    resetAllCalls() {
      this.alarmCollection.forEach((alarm) => (alarm.canCall = true));
    }
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
  }
  