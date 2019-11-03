<template>
	<div>
		<Navbar :page="page" />
		<main class="container mx-auto px-4">
			<div class="flex flex-wrap mt-32">
				<Sidebar />
				<div class="w-full md:w-3/4">
					<div class="lg:px-8 xl:px-12">
						<div class="markdown-body mb-16">
							<slot name="default" />
						</div>
						<div class="text-gray-700">
							<p class="font-semibold">Last updated at:</p>
							<!-- <p>{{ page.updatedAt }}</p> -->
						</div>
					</div>
				</div>
			</div>
		</main>
		<Footer />
	</div>
</template>

<script>
	import Navbar from '../components/Navbar';
	import Footer from '../components/Footer';
	import Sidebar from '../components/Sidebar';

	export const data = {
		injectAllPosts: true
	}

	export default {
		components: { Navbar, Footer, Sidebar },
		props: ['page'],
	}
</script>

<style lang="scss" src="@/sass/app.scss"></style>

<style lang="scss" scoped>
	ol {
		@apply list-decimal;
	}
</style>