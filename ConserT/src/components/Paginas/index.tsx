import React from "react";
import { View, Text, Pressable } from "react-native";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  return (
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 10, marginBottom: 140 }}>
        {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        const isActive = currentPage === page;

        return (
          <Pressable
            key={page}
            className={`w-20 h-20 rounded-full flex items-center justify-center ${
              isActive ? "bg-laranja" : "border border-white"
            }`}
            onPress={() => onPageChange(page)}
          >
            <Text className={isActive ? "text-white text-lg font-bold" : "text-white/80 text-lg font-bold"}>
              {page}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default Pagination;
