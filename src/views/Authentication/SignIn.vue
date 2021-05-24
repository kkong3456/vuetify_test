<template>
  <v-container  fill-height>
    <v-row justify="center">
      <v-col cols="auto">
        <v-card
          width="460"
          outlined
        >
          <v-card-text class="text-center px-12 py-12">
            <div class="text-h5 font-weight-black">
              로그인
            </div>
            <v-text-field
              label="이메일"
              clearable
              prepend-icon="mdi-email"
            ></v-text-field>
            <v-text-field
              label="비밀번호"
              clearable
              prepend-icon="mdi-lock-outline"
            ></v-text-field>
            <v-btn
              block
              color="error"
              rounded
              class="mt-6"
            >로그인</v-btn>
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
