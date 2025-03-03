// Sync all ziffers with system clock
function syncWithSystemClock() {
    var now = new Date();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours();

    // Synchronize each unit
    syncSecondPlay1(seconds);
    syncSecondPlay10(seconds);
    syncMinutePlay1(minutes);
    syncMinutePlay10(minutes);
    syncHourPlay1(hours);
    syncHourPlay10(hours);
}

// Sync second 1 (0-9)
function syncSecondPlay1(seconds) {
    $("body").removeClass("play");
    var aa = $("ul.secondPlay1 li.active");
    var newIndex = seconds % 10; // 0-9 for each second's ones place

    syncPlayList("secondPlay1", aa, newIndex);
}

// Sync second 10 (0-5)
function syncSecondPlay10(seconds) {
    $("body").removeClass("play");
    var aa = $("ul.secondPlay10 li.active");
    var newIndex = Math.floor(seconds / 10); // 0-5 for each 10 seconds

    syncPlayList("secondPlay10", aa, newIndex);
}

// Sync minute 1 (0-9)
function syncMinutePlay1(minutes) {
    $("body").removeClass("play");
    var aa = $("ul.minutePlay1 li.active");
    var newIndex = minutes % 10; // 0-9 for each minute's ones place

    syncPlayList("minutePlay1", aa, newIndex);
}

// Sync minute 10 (0-5)
function syncMinutePlay10(minutes) {
    $("body").removeClass("play");
    var aa = $("ul.minutePlay10 li.active");
    var newIndex = Math.floor(minutes / 10); // 0-5 for each 10 minutes

    syncPlayList("minutePlay10", aa, newIndex);
}

// Sync hour 1 (0-9)
function syncHourPlay1(hours) {
    $("body").removeClass("play");
    var aa = $("ul.hourPlay1 li.active");
    var newIndex = hours % 10; // 0-9 for each hour's ones place

    syncPlayList("hourPlay1", aa, newIndex);
}

// Sync hour 10 (0-2)
function syncHourPlay10(hours) {
    $("body").removeClass("play");
    var aa = $("ul.hourPlay10 li.active");
    var newIndex = Math.floor(hours / 10); // 0-2 for each 10 hours

    syncPlayList("hourPlay10", aa, newIndex);
}

// Helper function to sync the list based on new index
function syncPlayList(className, aa, newIndex) {
    var ul = $("ul." + className);
    var liItems = ul.find("li");
    var targetLi = liItems.eq(newIndex);

    // Apply the before class to the current active item
    if (aa && aa.length) {
        aa.addClass("before").removeClass("active").removeClass("empty");
    }

    // Reset the old element to an empty class
    targetLi.addClass("active").removeClass("before empty");
    $("body").addClass("play");
}

// Initialize the synchronization
syncWithSystemClock();

// Set interval to update every second
setInterval(function() {
    var now = new Date();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours();

    // Update the second, minute, and hour elements
    updateSecondPlay1(seconds);
    updateSecondPlay10(seconds);
    updateMinutePlay1(minutes);
    updateMinutePlay10(minutes);
    updateHourPlay1(hours);
    updateHourPlay10(hours);
}, 1000);

// Update second 1 (0-9)
function updateSecondPlay1(seconds) {
    var aa = $("ul.secondPlay1 li.active");
    var newIndex = seconds % 10; // 0-9 for each second's ones place

    updatePlayList("secondPlay1", aa, newIndex);
}

// Update second 10 (0-5)
function updateSecondPlay10(seconds) {
    var aa = $("ul.secondPlay10 li.active");
    var newIndex = Math.floor(seconds / 10); // 0-5 for each 10 seconds

    updatePlayList("secondPlay10", aa, newIndex);
}

// Update minute 1 (0-9)
function updateMinutePlay1(minutes) {
    var aa = $("ul.minutePlay1 li.active");
    var newIndex = minutes % 10; // 0-9 for each minute's ones place

    updatePlayList("minutePlay1", aa, newIndex);
}

// Update minute 10 (0-5)
function updateMinutePlay10(minutes) {
    var aa = $("ul.minutePlay10 li.active");
    var newIndex = Math.floor(minutes / 10); // 0-5 for each 10 minutes

    updatePlayList("minutePlay10", aa, newIndex);
}

// Update hour 1 (0-9)
function updateHourPlay1(hours) {
    var aa = $("ul.hourPlay1 li.active");
    var newIndex = hours % 10; // 0-9 for each hour's ones place

    updatePlayList("hourPlay1", aa, newIndex);
}

// Update hour 10 (0-2)
function updateHourPlay10(hours) {
    var aa = $("ul.hourPlay10 li.active");
    var newIndex = Math.floor(hours / 10); // 0-2 for each 10 hours

    updatePlayList("hourPlay10", aa, newIndex);
}

// Helper function to update the list based on new index
function updatePlayList(className, aa, newIndex) {
    var ul = $("ul." + className);
    var liItems = ul.find("li");
    var targetLi = liItems.eq(newIndex);

    // Apply the before class to the current active item
    if (aa && aa.length) {
        aa.addClass("before").removeClass("active").removeClass("empty");
    }

    // Reset the old element to an empty class
    targetLi.addClass("active").removeClass("before empty");
    $("body").addClass("play");
}
