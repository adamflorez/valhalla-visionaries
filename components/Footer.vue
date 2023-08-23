<template>
  <footer class="bg-rune-stone text-white py-12">
    <div class="container mx-auto px-4 md:px-0">
      <!-- Quick Links and Services -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
        <div>
          <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><a href="/" class="hover:underline">Home</a></li>
            <li><a href="/about" class="hover:underline">About Us</a></li>
            <li><a href="/services" class="hover:underline">Services</a></li>
            <li><a href="/contact" class="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Services</h3>
          <ul>
            <li>
              <a href="/services" class="hover:underline">Web Design</a>
            </li>
            <li>
              <a href="/services" class="hover:underline">Web Development</a>
            </li>
            <li><a href="/services" class="hover:underline">SEO</a></li>
          </ul>
        </div>
        <!-- Other columns for Contact Info or Newsletter Signup can be added similarly -->
      </div>

      <!-- Contact Info & Social Media -->
      <div class="flex flex-wrap justify-between mb-6">
        <div>
          <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
          <p>1234 Street Rd, City, FL</p>
          <p>(123) 456-7890</p>
          <p>info@valhallavisionaries.com</p>
        </div>
        <div>
          <!-- Social Media Icons Here -->
        </div>
      </div>

      <!-- Legal & Copyright -->
      <div class="border-t border-gray-700 pt-6">
        <div class="flex justify-between items-center">
          <div>
            <a href="/privacy-policy" class="mr-4 hover:underline"
              >Privacy Policy</a
            >
            <a href="/terms-of-service" class="hover:underline"
              >Terms of Service</a
            >
          </div>
          <div>
            &copy; {{ new Date().getFullYear() }} Valhalla Visionaries. All
            rights reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
