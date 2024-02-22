class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }

    if (this.alarmCollection.find(item => item.time === time)) {
      console.warn("Уже присутствует звонок на это же время");
    }

    this.alarmCollection.push({
      callback,
      time,
      canCall: true
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
  }

  getCurrentFormattedTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return hours + ":" + minutes;
  }

  start() {
    if (this.intervalId) {
      return;
    }
    

    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();
      this.alarmCollection.forEach((item) => {
        if (item.time === currentTime && item.canCall) {
          item.callback();
          item.canCall = false;
        }
      })
    }, 1000)
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((item) => item.canCall = true);
  }

  cleanAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
