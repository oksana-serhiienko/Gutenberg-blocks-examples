const { registerBlockType } = wp.blocks;
const { createElement: el, Fragment } = wp.element;
const { InspectorControls, useBlockProps } = wp.blockEditor;
const { PanelBody, TextControl, SelectControl } = wp.components;

registerBlockType('custom/ctabutton', {
	attributes: {
		label: {
			type: 'string',
			default: 'Get in touch'
		},
		align: {
			type: 'string',
			default: 'left'
		},
		destination: {
			type: 'string',
			default: '/contact-us/'
		}
	},

	edit({ attributes, setAttributes }) {
		const blockProps = useBlockProps();

		return el(
			Fragment,
			{},
			el(
				InspectorControls,
				{},
				el(
					PanelBody,
					{ title: 'CTA Settings' },
					el(TextControl, {
						label: 'Button Text',
						value: attributes.label,
						onChange: (label) => setAttributes({ label })
					}),
					el(TextControl, {
						label: 'Destination',
						value: attributes.destination,
						onChange: (destination) => setAttributes({ destination })
					}),
					el(SelectControl, {
						label: 'Align',
						value: attributes.align,
						options: [
							{ label: 'Left', value: 'left' },
							{ label: 'Center', value: 'center' },
							{ label: 'Right', value: 'right' }
						],
						onChange: (align) => setAttributes({ align })
					})
				)
			),
			el(
				'div',
				{
					...blockProps,
					style: { textAlign: attributes.align }
				},
				el('button', { type: 'button', className: 'btn' }, attributes.label)
			)
		);
	},

	save() {
		return null;
	}
});