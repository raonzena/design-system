<template>
  <div id="app">
    <h2>카드 세로형 레이아웃</h2>
    <Row>
      <template v-for="item in dummy">
        <Col :cols="2" :key="`${item.id}`">
          <Card :img-src="item.imgUrl" img-alt="Image" direction="col">
            <CardContent>
              <p class="col__label">{{ item.seller }}</p>
              <h2 class="col__title">{{ item.title }}</h2>
              <div>
                <span v-if="item.discountPrice" class="col__highlight">{{ item.discountPrice | numberComma }}</span>
                <span v-if="item.productPrice" class="col__cross-out">{{ item.productPrice | numberComma }}</span>
              </div>
            </CardContent>
            <CardFooter>
              <StarRate :rate="item.rate"></StarRate>
              <p class="col__summary">{{ item.reviewSummary }}</p>
            </CardFooter>
          </Card>
        </Col>
      </template>
    </Row>
    <h2>카드 가로형 레이아웃</h2>
    <Row>
      <template v-for="item in dummy2">
        <Col :cols="5" :key="`no-footer-${item.id}`">
          <Card :img-src="item.imgUrl" img-alt="Image" direction="row">
            <CardContent>
              <h2 class="row__title">{{ item.title }}</h2>
              <p class="row__content">{{ item.reviewSummary }}</p>
            </CardContent>
            <CardFooter>
              <StarRate :rate="item.rate"></StarRate>
              <span class="row__name">{{ item.reviewerName }}</span>
            </CardFooter>
          </Card>
        </Col>
      </template>
    </Row>
    <h2>입력 폼 UI</h2>
    <form @submit.prevent="onSubmit">
      <div class="input-wrapper">
        <TextInput placeholder="입력해주세요." :content="textContent" @change="onChange"></TextInput>
        <Button v-if="!isHideButton" type="submit">Save</Button>
      </div>
    </form>
    <TextInput placeholder="입력해주세요." disabled></TextInput>
    <TextInput placeholder="입력해주세요." readonly></TextInput>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Row from '@/components/Grid/Row.vue';
import Col from '@/components/Grid/Col.vue';
import Card from '@/components/Card/Card.vue';
import CardContent from '@/components/Card/CardContent.vue';
import CardFooter from '@/components/Card/CardFooter.vue';
import StarRate from '@/components/StarRate/StarRate.vue';
import TextInput from '@/components/TextInput/TextInput.vue';
import Button from '@/components/Button/Button.vue';
import { dummy, dummy2 } from '@/constants/list.constant';
import { Dummy, Dummy2 } from '@/interfaces/list';

@Component({
  components: {
    Row,
    Col,
    Card,
    CardContent,
    CardFooter,
    StarRate,
    TextInput,
    Button,
  },
})
export default class App extends Vue {
  textContent = '값이 있는 경우';
  initialTextContent = this.textContent;

  get dummy(): Array<Dummy> {
    return dummy.response;
  }
  get dummy2(): Array<Dummy2> {
    return dummy2.response;
  }

  get isHideButton(): boolean {
    return !this.textContent || this.textContent === this.initialTextContent;
  }

  onChange(content: string): void {
    this.textContent = content;
  }
  onSubmit(): void {
    console.log('text', this.textContent);
  }
}
</script>

<style lang="scss">
@import './style/_normalize.scss';
.col__label {
  @include line-clamp(1);
  font-size: 12px;
  color: #999999;
}
.col__title {
  @include line-clamp(2);
  color: #333333;
  font-size: 14px;
}
.col__highlight {
  font-size: 12px;
  color: #ff7b30;
}
.col__cross-out {
  font-size: 10px;
  color: #c2c2c2;
  text-decoration: line-through;
  padding-left: 2px;
}
.col__summary {
  @include line-clamp(1);
  margin: 0;
}
.row__title {
  @include line-clamp(1);
  color: #333333;
  font-size: 14px;
}
.row__content {
  @include line-clamp(3);
  color: #333333;
  font-size: 14px;
  margin: 0;
}
.row__name {
  color: #333333;
  &::before {
    content: '|';
    padding: 0 5px;
  }
}
.input-wrapper {
  display: flex;
}
</style>
