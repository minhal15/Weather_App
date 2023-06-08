<script setup>
import { format } from 'date-fns'
</script>

<template>
  {{ format(new Date(), 'yyyy-MM-dd hh:mm:ss') }}
</template>
