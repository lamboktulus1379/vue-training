<template>
  <div class="modal-container">
    <div @click="hideModal" class="box-backdrop"></div>
    <div class="box-modal">
      <div class="box-modal-title">
        <div>{{ modalTitle }}</div>
        <div>
          <span @click="hideModal">X</span>
        </div>
      </div>
      <div class="box-modal-body">{{ modalBody }}</div>
      <div class="box-modal-foot">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  props: [
    "modalTitle",
    "modalBody",
    "modalFoot",
    "hideModal",
    "registerComplete"
  ]
};
</script>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  top: 50px;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1001;
}
.box-backdrop {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.box-modal {
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
  background: #f5f5f5;
  position: absolute;
  left: 50%;
  margin-left: -150px;
  top: 50%;
  margin-top: -150px;
  z-index: 1000;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  .box-modal-title {
    background: #ccc;
    width: 100%;
    height: 50px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 5px;

    span:hover {
      cursor: pointer;
    }
  }
  .box-modal-body {
    background: #f5f5f5;
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
  }
  .box-modal-foot {
    background: #ccc;
    width: 100%;
    height: 50px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 5px;
  }
}
</style>
