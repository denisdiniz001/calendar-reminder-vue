<template>
    <div v-if="reminder" class="c-card__reminder" :class="`c-card__reminder--${reminder.color}`">
        <router-link v-if="reminder && reminder.id" :to="{ name: 'Reminder', params: { reminderPos: pos } }" class="c-card__reminder--link">
            <p>
                <b>Description: </b>{{reminder.description}}
            </p>
            <span>
                <b>Time: </b>{{reminder.time}}
            </span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "CardReminder",
    props: {
        reminder: Object,
        pos: Number
    },
    mounted() {
        console.log(this.pos)
    }
}
</script>

<style lang="scss" scoped>
    .c-card {
        &__reminder {
            box-sizing: border-box;
            padding: 1rem;
            margin-bottom: 5px;
            text-align: left;
            width: 100%;
            &--link {
                color: #FFF;
                display: flex;
                flex-direction: column;
                text-decoration: none;
            }

            &--red {
                background-color: #b31d23;
            }
            &--blue {
                background-color: #0000b3;
            }
            &--yellow {
                background-color: yellow;
                .c-card__reminder--link {
                    color: #000 !important;
                }
            }
            &--green {
                background-color: #227438;
            }
            &--navy {
                background-color: navy;
            }
            &--cyan {
                background-color: cyan;
            }
            &--orange {
                background-color: orange;
            }
        }
    }
</style>