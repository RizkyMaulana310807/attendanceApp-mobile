import React from "react";
import { View } from "react-native";
import { Circle, Svg, Text as SvgText } from "react-native-svg";

interface ProgressCardProps {
  totalHours: number;
  totalPresent: number;
  task: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  totalHours,
  totalPresent,
  task,
}) => {
  const progress = totalHours > 0 ? (totalPresent / totalHours) * 100 : 0;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Svg height="80" width="80">
        <Circle
          cx="40"
          cy="40"
          r="30"
          stroke="#e6e6e6"
          strokeWidth="8"
          fill="none"
        />
        <Circle
          cx="40"
          cy="40"
          r="30"
          stroke="#4CAF50"
          strokeWidth="8"
          fill="none"
          strokeDasharray={`${2 * Math.PI * 30}`}
          strokeDashoffset="0"
          strokeLinecap="round"
        />
        <SvgText x="40" y="45" textAnchor="middle" fontSize="14" fill="#000">
          {totalHours}
        </SvgText>
      </Svg>
      <Svg height="80" width="80">
        <Circle
          cx="40"
          cy="40"
          r="30"
          stroke="#e6e6e6"
          strokeWidth="8"
          fill="none"
        />
        <Circle
          cx="40"
          cy="40"
          r="30"
          stroke="#4CAF50"
          strokeWidth="8"
          fill="none"
          strokeDasharray={`${2 * Math.PI * 30}`}
          strokeDashoffset={`${2 * Math.PI * 30 * (1 - progress / 100)}`}
          strokeLinecap="round"
        />
        <SvgText x="40" y="45" textAnchor="middle" fontSize="14" fill="#000">
          {Math.round(progress)}%
        </SvgText>
      </Svg>
      <Svg height="80" width="80">
        <Circle
          cx="40"
          cy="40"
          r="30"
          stroke="#e6e6e6"
          strokeWidth="8"
          fill="none"
        />
        <Circle
          cx="40"
          cy="40"
          r="30"
          stroke="#4CAF50"
          strokeWidth="8"
          fill="none"
          strokeDasharray={`${2 * Math.PI * 30}`}
          strokeDashoffset="0"
          strokeLinecap="round"
        />
        <SvgText x="40" y="45" textAnchor="middle" fontSize="14" fill="#000">
          {task}
        </SvgText>
      </Svg>
    </View>
  );
};

export default ProgressCard;
