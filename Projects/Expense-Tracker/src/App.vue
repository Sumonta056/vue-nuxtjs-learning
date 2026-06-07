<script setup>
import { computed, onMounted, ref } from "vue";
import AddTransaction from "./components/AddTransaction.vue";
import Balance from "./components/Balance.vue";
import Header from "./components/Header.vue";
import IncomeExpense from "./components/IncomeExpense.vue";
import TransactionList from "./components/TransactionList.vue";

import { useToast } from "vue-toastification";

const toast = useToast();

const transactions = ref([]);

onMounted(() => {
  const storedTransactions = localStorage.getItem("transactions");
  if (storedTransactions) {
    transactions.value = JSON.parse(storedTransactions);
  }
});

const saveToLocalStorage = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions.value));
};

const total = computed(() => {
  return transactions.value.reduce((acc, item) => {
    return (acc += item.amount);
  }, 0);
});

const income = computed(() => {
  return transactions.value
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => {
      return (acc += item.amount);
    }, 0);
});

const expense = computed(() => {
  return transactions.value
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => {
      return (acc += item.amount);
    }, 0);
});

const generateID = () => {
  return Math.floor(Math.random() * 100000000);
};

const handleTransaction = (newTransaction) => {
  transactions.value.push({
    id: generateID(),
    text: newTransaction.text,
    amount: newTransaction.amount,
  });

  saveToLocalStorage();
  toast.success("Transaction added successfully");
};

const handleDelete = (id) => {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== id
  );
  saveToLocalStorage();
  toast.success("Transaction deleted successfully");
};
</script>

<template>
  <Header />
  <div class="container">
    <Balance :total="total" />
    <IncomeExpense :income="income" :expense="expense" />
    <TransactionList
      :transactions="transactions"
      @transactionDeleted="handleDelete"
    />
    <AddTransaction @transactionSubmitted="handleTransaction" />
  </div>
</template>

<style scoped></style>

