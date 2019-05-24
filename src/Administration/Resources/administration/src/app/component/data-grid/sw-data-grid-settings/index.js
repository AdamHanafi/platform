import template from './sw-data-grid-settings.html.twig';
import './sw-data-grid-settings.scss';

/**
 * @private
 */
export default {
    name: 'sw-data-grid-settings',

    template,

    props: {
        columns: {
            type: Array,
            default() {
                return [];
            },
            required: true
        },
        compact: {
            type: Boolean,
            required: true,
            default: false
        },
        previewImages: {
            type: Boolean,
            required: true,
            default: false
        },
        disabled: {
            type: Boolean,
            required: true,
            default: false
        }
    },

    data() {
        return {
            currentCompact: false,
            currentPreviewImages: false,
            currentColumns: []
        };
    },

    watch: {
        columns() {
            this.createdComponent();
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.currentCompact = this.compact;
            this.currentColumns = this.columns;
            this.currentPreviewImages = this.previewImages;
        },

        onChangeCompactMode(value) {
            this.$emit('change-compact-mode', value);
        },

        onChangePreviewImages(value) {
            this.$emit('change-preview-images', value);
        },

        onChangeColumnVisibility(value, index) {
            this.$emit('change-column-visibility', value, index);
        },

        onClickChangeColumnOrderUp(columnIndex) {
            this.$emit('change-column-order', columnIndex, columnIndex - 1);
        },

        onClickChangeColumnOrderDown(columnIndex) {
            this.$emit('change-column-order', columnIndex, columnIndex + 1);
        }
    }
};
