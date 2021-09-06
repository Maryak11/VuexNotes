<template>
  <div class="tags-list">
    <div
      class="tag-item"
      v-for="(tag, index) in items"
      :key="index"
      @click="onClickTag(tag)"
      :class="{ isPreview: isPreview, isActive: tag.isActive && !isPreview }"
    >
      <span> {{ tag.title }} </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    isPreview: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClickTag(tag) {
      this.$store.dispatch('changeTagActive', tag)
    }
  }
}
</script>
<style lang="scss">
.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;
  &.isPreview {
    padding: 0;
    color: #444ce0;
    cursor: default;
    &:before {
      content: '#';
    }
  }
  &.isActive {
    background-color: #444ce0;
    color: #fff;
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
