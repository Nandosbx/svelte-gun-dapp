<script>
    import { username, user } from './user'

    function signout() {
        user.leave()
        username.set('')
    }
</script>

<header>
    <h1>Gun</h1>
    {#if $username}
        <div class="user-bio">
            <span>Hello <strong>{$username}</strong></span>

            <img
                src={`https://avatar.decibear.com/api/initials/${$username}.svg`}
                alt=""
            />
        </div>

        <button class="signout-button" on:click={signout}>Sign Out</button>
    {:else}
        <h3>Gun.js Chat</h3>
    {/if}
</header>
