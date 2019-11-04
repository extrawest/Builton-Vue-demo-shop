<template>
  <div>
    <div class="heading">Delivery address</div>

    <label class="label">
      <input type="text"
             placeholder="Search address..."
             v-model="query"
             @input="throttledSearch(search)">
    </label>

    <div v-if="!address" class="options">
      <div class="option"
           @click="setAddress(address['display_name'])"
           v-for="address in options" :key="address['place_id']">
        {{address['display_name']}}
      </div>
    </div>

    <template v-if="address">
      <div class="heading__sub">Selected delivery address</div>
      <div class="list-item-row">
        <p>{{ address }}</p>
        <div class="mark">✓</div>
      </div>

      <AppButton class="button"
                 @click="$router.push('/checkout/confirmation')" title="next"/>
    </template>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import throttle from '~/plugins/throttle'
    import AppButton from '~/components/AppButton.vue'

    @Component({
        name: "delivery_address",
        layout: 'checkout',
        components: {
            AppButton
        }
    })
    export default class DeliveryAddress extends Vue {
        query: string = '';
        locationIq: any[] = [];
        address: string = 'test';

        get throttledSearch(): any {
            return throttle(this.search, 300);
        }

        get options(): any[] {
            return this.locationIq.slice(0, 5);
        }

        search(): void {
            if (this.query.length < 2) return;
            this.address = '';

            fetch(`https://us1.locationiq.com/v1/search.php?key=05f527f49d8a94&q=${this.query}&format=json`)
                .then(res => res.json())
                .then(res => {
                    if (res && res.length) {
                        this.locationIq = res
                    } else {
                        this.locationIq = []
                    }
                });
        }

        setAddress(address: any): void {
            this.query = '';
            this.address = address;
        }
    }
</script>

<style lang="less" scoped>
  @import "../../assets/variables";

  .heading {
    box-sizing: border-box;
    font-size: 1.6rem;
    margin: 12px 0 24px;
    padding: 8px 16px;
    border-bottom: 4px solid @SECONDARY_BORDER_COLOR;
    &__sub {
      line-height: 1.15;
      box-sizing: border-box;
      border-bottom: 2px solid @PRIMARY_BORDER_COLOR;
      padding: 12px 6px;
      margin-bottom: 24px;
      letter-spacing: 1px;
      font-size: .72rem;
      color: #8d8d8d;
      text-transform: uppercase;
    }
  }

  .label {
    display: block;
    margin: 64px 0 32px;

    input {
      width: 288px;
      padding: 8px;
      border: none;
      border-bottom: 2px solid @PRIMARY_BORDER_COLOR;
      outline: none;
      transition: .3s;

      &:focus {
        outline: none;
        border-bottom: 2px solid @SECONDARY_BORDER_COLOR;
      }
    }
  }

  .options {
    margin-bottom: 32px;

    .option {
      padding: 8px;
      border-radius: 4px;
      transition: .3s;
      cursor: pointer;

      &:hover {
        background: rgba(@SECONDARY_TEXT, .2);
      }
    }
  }

  .list-item-row {
    display: flex;
    flex-direction: row;
    padding: 16px 24px;
    border: 2px solid @SECONDARY_BORDER_COLOR;
    background-color: rgba(@PRIMARY_BACKGROUND, .7);
    border-radius: 12px;
    position: relative;
    letter-spacing: 1px;
    transition: all 250ms ease-in;
    margin-top: 16px;

    .mark {
      margin-top: auto;
      line-height: 1.15;
      font-weight: 300;
      letter-spacing: 1px;
      cursor: pointer;
      box-sizing: border-box;
      font-size: 40px;
      color: @SECONDARY_BORDER_COLOR;
    }

    &:hover {
      transition: all 250ms ease-in;
      cursor: pointer;
      box-shadow: 0 0 20px -11px rgba(0, 0, 0, 0.75);
    }
  }

  .button {
    margin: 64px auto;
  }
</style>
