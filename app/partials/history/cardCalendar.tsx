import React, { useMemo, useRef, useState } from "react";

import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { Calendar } from "react-native-calendars";

import styles from "@/assets/styles/calendarStyle";

export default function CardCalendar() {
  const [isCalendarVisible, setIsCalendarVisible] = useState(true);

  const [selectedDate, setSelectedDate] = useState("");

  const scrollRef = useRef<ScrollView>(null);

  const itemPositions = useRef<Record<string, number>>({});

  /* =========================
     GENERATE DATA BULAN INI
  ========================== */

  const attendanceData = useMemo(() => {
    const currentDate = new Date();

    const currentYear = currentDate.getFullYear();

    const currentMonth = currentDate.getMonth();

    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    const data = [];

    for (let day = totalDays; day >= 1; day--) {
      const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(
        2,
        "0",
      )}-${String(day).padStart(2, "0")}`;

      const randomHourIn = Math.floor(Math.random() * 3) + 7;

      const randomMinuteIn = Math.floor(Math.random() * 60);

      const randomHourOut = Math.floor(Math.random() * 3) + 15;

      const randomMinuteOut = Math.floor(Math.random() * 60);

      const totalHours = randomHourOut - randomHourIn;

      data.push({
        id: day,

        date: formattedDate,

        checkIn: `${String(randomHourIn).padStart(2, "0")}:${String(
          randomMinuteIn,
        ).padStart(2, "0")} AM`,

        checkOut: `${String(randomHourOut).padStart(2, "0")}:${String(
          randomMinuteOut,
        ).padStart(2, "0")} PM`,

        totalHours: `${totalHours}H`,
      });
    }

    return data;
  }, []);

  /* =========================
     HANDLE SELECT DATE
  ========================== */

  const handleSelectDate = (dateString: string) => {
    setSelectedDate(dateString);

    requestAnimationFrame(() => {
      const y = itemPositions.current[dateString];

      if (y !== undefined && scrollRef.current) {
        scrollRef.current.scrollTo({
          y: y,
          animated: true,
        });
      }
    });
  };
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Attendance History</Text>

        <TouchableOpacity
          onPress={() => setIsCalendarVisible(!isCalendarVisible)}
        >
          <Text style={styles.headerSubtitle}>
            {isCalendarVisible ? "Hide Calendar" : "Show Calendar"}
          </Text>
        </TouchableOpacity>

        <Text style={styles.headerSubtitle}>
          Track your attendance progress
        </Text>
      </View>
      {/* CALENDAR */}
      {isCalendarVisible && (
        <View style={styles.calendarCard}>
          <Calendar
            hideExtraDays={true}
            enableSwipeMonths={true}
            onDayPress={(day) => {
              handleSelectDate(day.dateString);
            }}
            theme={{
              backgroundColor: "#F7FFF7",

              calendarBackground: "#F7FFF7",

              textSectionTitleColor: "#0F172A",

              selectedDayBackgroundColor: "#84CC16",

              selectedDayTextColor: "#FFFFFF",

              todayTextColor: "#84CC16",

              dayTextColor: "#0F172A",

              textDisabledColor: "#C7C7C7",

              monthTextColor: "#0F172A",

              arrowColor: "#84CC16",

              textDayFontFamily: "Quicksand",

              textMonthFontFamily: "Fredoka",

              textDayHeaderFontFamily: "Fredoka",

              textDayFontWeight: "bold",

              textMonthFontWeight: "bold",

              textDayHeaderFontWeight: "bold",
            }}
            style={styles.calendar}
            dayComponent={({ date, state }) => {
              const isSunday = date && new Date(date.dateString).getDay() === 0;

              const today = new Date().toISOString().split("T")[0];

              const isToday = date?.dateString === today;

              const isSelected = date?.dateString === selectedDate;

              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    if (date?.dateString) {
                      handleSelectDate(date.dateString);
                    }
                  }}
                  style={[
                    styles.dayContainer,

                    isSunday && styles.sundayContainer,

                    isToday && styles.todayContainer,

                    isSelected && styles.selectedContainer,

                    state === "disabled" && styles.disabledContainer,
                  ]}
                >
                  <Text
                    style={[
                      styles.dayText,

                      isSunday && styles.sundayText,

                      isToday && styles.todayText,

                      isSelected && styles.selectedText,

                      state === "disabled" && styles.disabledText,
                    ]}
                  >
                    {date?.day}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
      {/* HISTORY WRAPPER */}
      <View style={styles.historyWrapper}>
        {/* TITLE */}
        <Text style={styles.historyHeading}>Attendance History</Text>

        {/* HISTORY LIST */}
        <ScrollView
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.historyContainer}
          scrollEventThrottle={16}
          nestedScrollEnabled={true}
        >
          {attendanceData.map((item) => {
            const isActive = selectedDate === item.date;

            return (
              <View
                key={item.id}
                onLayout={(event) => {
                  itemPositions.current[item.date] = event.nativeEvent.layout.y;
                }}
                style={[
                  styles.historyCard,

                  isActive && styles.activeHistoryCard,
                ]}
              >
                {/* NUMBER */}
                <View
                  style={[
                    styles.numberContainer,

                    isActive && styles.activeNumberContainer,
                  ]}
                >
                  <Text
                    style={[
                      styles.numberText,

                      isActive && styles.activeNumberText,
                    ]}
                  >
                    {item.id}
                  </Text>
                </View>

                {/* INFO */}
                <View style={styles.infoContainer}>
                  {/* CHECK IN */}
                  <View style={styles.infoColumn}>
                    <Text style={styles.infoTitle}>{item.checkIn}</Text>

                    <Text style={styles.infoSubtitle}>Checked-In</Text>
                  </View>

                  <View style={styles.line} />

                  {/* CHECK OUT */}
                  <View style={styles.infoColumn}>
                    <Text style={styles.infoTitle}>{item.checkOut}</Text>

                    <Text style={styles.infoSubtitle}>Checked-Out</Text>
                  </View>

                  <View style={styles.line} />

                  {/* TOTAL HOURS */}
                  <View style={styles.infoColumn}>
                    <Text style={styles.infoTitle}>{item.totalHours}</Text>

                    <Text style={styles.infoSubtitle}>Total-Hours</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
