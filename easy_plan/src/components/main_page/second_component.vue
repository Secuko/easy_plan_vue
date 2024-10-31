<script>
export default {
    name: '',
    components: {},
    props: {},
    data() {
        return {}
    },
    computed: {},
    methods: {}
}

</script>
<template>
    <div className='second-component-body'>
        <div className='second-component-content-wrapper'>
            <div className='second-component-content-image-wrapper'>
                <img src="../../assets/image/main_screen_second_component.png" alt='meeting'
                    className='second-component-content-image' />
            </div>
            <div className='second-component-content-text-wrapper'>
                <p className='second-component-content-text'>
                    Easy Plan - единое пространство управления командными и индивидуальными проектами
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* second component */
.second-component-body {
    padding-bottom: 140px;
    padding-left: 85px;
    padding-top: 135px;
    width: 100%;
}

.second-component-content-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}


.second-component-content-image {
    height: 550px;
    flex-basis: 557px;
    flex-shrink: 0;
}

.second-component-content-text-wrapper {
    margin-top: 20px;
    margin-bottom: 20px;
    flex-basis: 1000px;
    flex-grow: 1;
    padding: 20px 0px;
    margin-left: 200px;
    flex-shrink: 1;
}

.second-component-content-text {
    font-size: 45px;
    text-align: start;
    font-weight: 400;
}

@media only screen and (max-width: 1200px) {

    /* second element */

    .second-component-body {
        padding-bottom: 30px;
        padding-top: 30px;
    }

    .second-component-content-text-wrapper {
        margin-left: 0px;
        flex-basis: auto;
    }
}

@media only screen and (max-width: 900px) {

    /* second component */

    .second-component-content-text {
        font-size: 38px;
    }

}

@media only screen and (max-width: 650px) {

    /* second component */

    .second-component-content-text {
        font-size: 32px;
    }
}
</style>
