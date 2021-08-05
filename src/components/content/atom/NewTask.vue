<template>
  <input class="new" type="text" placeholder="Add a new task" />
</template>

<script></script>

<style lang="scss">
.new {
  width: 100%;
  padding: 0.5rem 0;
  text-align: center;
  color: #ffca93;
  background-color: #ffecd8;
  border: 0.125rem dashed #ffca93;
  border-radius: 0.3rem;
  cursor: pointer;

  &::placeholder {
    color: #ffca93;
    padding-left: 0.5rem;
  }

  &:focus {
    outline: none;
  }
}
</style>
