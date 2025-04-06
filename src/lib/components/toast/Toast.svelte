<script lang="ts">
    import { toastStore } from "$lib";
    import { fade } from "svelte/transition";
    import {Button, Heading} from "$lib";

    let show = false;
    let message: string | null = null;
    let heading: string | null = null;

    $: {
        if ($toastStore) {
            show = true;
            message = $toastStore.text;
            heading = $toastStore.title;

            setTimeout(() => {
                show = false;
            }, ($toastStore.duration ?? 2) * 1000);
        }
    }
</script>

<div>
    {#if show}
        <div in:fade out:fade class="absolute top-0 w-full">
            <div class="flex justify-center m-5">
                <div class="z-20 w-full rounded-md shadow-xl border muted-border bg-white p-5 transition">
                    <div class="flex items-center justify-between">
                        {#if heading !== null}
                            <Heading classProp="!my-0">{heading}</Heading>
                        {:else}
                            <p class="font-semibold text-sm">{message}</p>
                        {/if}

                        <Button
                            on:click
                            on:mouseover
                            on:mouseenter
                            on:mouseleave
                            on:focus
                        >
                            <i class="fa-solid fa-xmark muted-text"></i>
                        </Button>
                    </div>

                    {#if heading !== null}
                        <p class="text-sm muted-text">{message}</p>
                    {/if}
                </div>
            </div>
        </div>
    {/if}
</div>