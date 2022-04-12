<template>
  <footer class="bg-gray-100" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
      <div class="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-4">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3
                class="text-sm font-semibold tracking-wider text-gray-400 uppercase"
              >
                glossary
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li>
                  <nuxt-link
                    class="text-base text-gray-500 hover:text-gray-900"
                    :to="{ path: '/treehouse', hash: '#map' }"
                    >Location</nuxt-link
                  >
                </li>

                <li>
                  <nuxt-link
                    class="text-base text-gray-500 hover:text-gray-900"
                    :to="{ path: '/treehouse', hash: '#gallery' }"
                    >Gallery</nuxt-link
                  >
                </li>

                <li>
                  <nuxt-link
                    class="text-base text-gray-500 hover:text-gray-900"
                    to="/info"
                    >Near to Los Yarumos</nuxt-link
                  >
                </li>

                <li>
                  <nuxt-link
                    class="text-base text-gray-500 hover:text-gray-900"
                    to="/info"
                    >Press</nuxt-link
                  >
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3
                class="text-sm font-semibold tracking-wider text-gray-400 uppercase"
              >
                Los Yarumos
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li>
                  <nuxt-link
                    class="text-base text-gray-500 hover:text-gray-900"
                    to="/info"
                    >About</nuxt-link
                  >
                </li>

                <li>
                  <nuxt-link
                    class="text-base text-gray-500 hover:text-gray-900"
                    :to="{ path: '/treehouse', hash: '#reviews' }"
                    >Reviews</nuxt-link
                  >
                </li>

                <li>
                  <nuxt-link
                    class="text-base text-gray-500 hover:text-gray-900"
                    to="/info"
                    >Food</nuxt-link
                  >
                </li>

                <li>
                  <nuxt-link
                    class="text-base text-gray-500 hover:text-gray-900"
                    to="/info"
                    >Wellness</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div></div>
            <div class="mt-12 md:mt-0"></div>
          </div>
        </div>
        <div class="mt-12 xl:mt-0">
          <h3
            class="text-sm font-semibold tracking-wider text-gray-400 uppercase"
          >
            Language
          </h3>
          <form class="mt-4 sm:max-w-xs">
            <fieldset class="w-full">
              <label for="language" class="sr-only">Language</label>
              <div class="relative">
                <select
                  id="language"
                  name="language"
                  class="block w-full py-2 pl-3 pr-10 text-base text-gray-900 bg-white border border-gray-300 rounded-md appearance-none bg-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  @change.prevent.stop="
                    $i18n.setLocale(untoggledLocales[0].code)
                  "
                >
                  <option v-for="(locale, i) in availableLocales" :key="i">
                    {{ locale.name }}
                  </option>
                </select>
                <div
                  class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <div
        class="pt-8 border-t border-gray-200 lg:flex lg:items-center lg:justify-between xl:mt-0"
      >
        <div>
          <h3
            class="text-sm font-semibold tracking-wider text-gray-400 uppercase"
          >
            Get updates from us
          </h3>
          <p class="mt-2 text-base text-gray-500">
            Very occasionally, when there's something noteworthy, we'll let you
            know.
          </p>
        </div>
        <form class="mt-4 sm:flex sm:max-w-md lg:mt-0">
          <label for="email-address" class="sr-only">Email address</label>
          <input
            id="email-address"
            type="email"
            name="email-address"
            autocomplete="email"
            required
            class="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400 sm:max-w-xs"
            placeholder="Enter your email"
          />
          <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div
        class="pt-8 mt-8 border-t border-gray-200 md:flex md:items-center md:justify-between"
      >
        <div class="flex space-x-6 md:order-2">
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Facebook</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Instagram</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
        <p class="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
          &copy; 2022 Los Yarumos. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
    untoggledLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  /* methods: {
    langToggle() {
      // this.$root.$emit('eventing');
      console.log(this.$i18n.locales)
    },
  }, */
}
</script>
