import database from "@/data/db.json";

import { INewsData } from "@/types/news";
import { IMatchData } from "@/types/matche";
import { IPredictionsData } from "@/types/predictions";

// اطلاعات ثابت پروژه
const mockDatabase = database as {
  news: INewsData[];
  matches: IMatchData[];
};

// کلید ذخیره پیش‌بینی‌ها در مرورگر
const PredictionsKey = "football-plus-predictions";

// خواندن پیش‌بینی‌های ذخیره‌شده
function getSavedPredictions(): IPredictionsData[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const savedData = localStorage.getItem(PredictionsKey);

    return savedData ? JSON.parse(savedData) : [];
  } catch {
    return [];
  }
}

// دریافت تمام اخبار
export async function getNews(): Promise<INewsData[]> {
  return mockDatabase.news;
}

// دریافت یک خبر با شناسه
export async function getNewsById(id: number): Promise<INewsData | undefined> {
  return mockDatabase.news.find((item) => item.id === id);
}

// دریافت تمام مسابقات
export async function getMatches(): Promise<IMatchData[]> {
  return mockDatabase.matches;
}

// بررسی پیش‌بینی قبلی کاربر برای یک مسابقه
export async function getUserPrediction(
  userId: number,
  matchId: number,
): Promise<IPredictionsData | undefined> {
  const predictions = getSavedPredictions();

  return predictions.find(
    (item) => item.userId === userId && item.matchId === matchId,
  );
}

// ثبت پیش‌بینی جدید
export async function addPrediction(
  prediction: IPredictionsData,
): Promise<void> {
  const predictions = getSavedPredictions();

  const alreadyPredicted = predictions.some(
    (item) =>
      item.userId === prediction.userId && item.matchId === prediction.matchId,
  );

  if (alreadyPredicted) {
    throw new Error("شما قبلاً این مسابقه را پیش‌بینی کرده‌اید");
  }

  predictions.push(prediction);

  localStorage.setItem(PredictionsKey, JSON.stringify(predictions));
}
