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
      <AddressBox/>

      <AppButton class="button" @click="$router.push('/checkout/confirmation')" title="next"/>
    </template>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import throttle from '~/plugins/throttle'
    import AppButton from '~/components/AppButton.vue'
    import AddressBox from './AddressBox.vue'

    @Component({
        name: "delivery_address",
        layout: 'checkout',
        middleware: 'checkAuth',
        components: {
            AppButton,
            AddressBox
        }
    })
    export default class DeliveryAddress extends Vue {
        query: string = '';
        locationIq: any[] = [];

        get address(): string {
            return this.$store.getters.getOrder.address
        }

        get throttledSearch(): any {
            return throttle(this.search, 300);
        }

        get options(): any[] {
            return this.locationIq.slice(0, 5);
        }

        search(): void {
            if (this.query.length < 2) return;
            this.$store.dispatch('setDeliveryAddress', '');

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
            this.$store.dispatch('setDeliveryAddress', address);
        }
    }
</script>

<style lang="less" scoped>
  @import "../../../assets/variables";

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

  .button {
    margin: 64px auto;
  }
</style>
