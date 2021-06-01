<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="auto">
        <router-link to="/">
          <v-img
            title="홈으로"
            class="mx-auto mb-6"
            width="120"
            :src="require('@/assets/logo.svg')"
          />
        </router-link>
        <v-card
          width="460"
          outlined
        >
          <v-card-text class="text-center px-12 py-12">
            <validation-observer
              ref="observer"
              v-slot="{invalid}"
            >
              <v-form @submit.prevent="signUp">
                <div class="text-h5 font-weight-black">
                  회원가입
                </div>
                <validation-provider
                  v-slot="{errors}"
                  name="이메일"
                  :rules="{required:true,email:true}"
                >
                  <v-text-field
                    v-model="email"
                    label="이메일"
                    clearable
                    prepend-icon="mdi-email"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{errors}"
                  name="비밀번호"
                  :rules="{required:true}"
                >
                  <v-text-field
                    v-model="password"
                    label="비밀번호"
                    clearable
                    prepend-icon="mdi-lock-outline"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{errors}"
                  mame="비밀번호확인"
                  :rules="{confirmed:'비밀번호'}"
                >
                  <v-text-field
                    v-model="passwordConform"
                    label="비밀번호 확인"
                    clearable
                    prepend-icon="mdi-lock-outline"
                    :error-messages="errors"
                  />
                </validation-provider>
                <v-btn
                  block
                  color="error"
                  type="submit"
                  rounded
                  x-large
                  class="mt-6"
                  :disabled="invalid"
                >
                  가입하기
                </v-btn>
              </v-form>
            </validation-observer>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name:'SignUp',
  data(){
    return{
      email:null,
      password:null,
      passwordConform:null,
    }
  },
  methods:{
    async signUp(){
      const result=await this.$refs.observer.validate();
      if(result){
        alert('회원가입 절차로 진입하였습니다.');
      }
    }
  }
}
</script>

<style scoped>

</style>
