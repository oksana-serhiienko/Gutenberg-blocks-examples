(function (blocks, element, blockEditor, components) {
	const { registerBlockType } = blocks;
	const { createElement: el } = element;
	const { useBlockProps, InspectorControls } = blockEditor;
	const { PanelBody, TextControl } = components;

	registerBlockType('custom/formspreeform', {
		attributes: {
			form_id: {
				type: 'string',
				default: ''
			}
		},

		edit({ attributes, setAttributes }) {
			const blockProps = useBlockProps();
			const { form_id } = attributes;

			return el(
				'div',
				null,

				el(InspectorControls, null,
					el(PanelBody, { title: 'Form Settings' },
						el(TextControl, {
							label: 'Formspree Form ID',
							value: form_id,
							onChange: (value) => setAttributes({ form_id: value })
						})
					)
				),

				el('div', {
						...blockProps,
						style: {
							padding: '20px',
							border: '1px solid #ddd',
							background: '#f5f5f5'
						}
					},
					el('h4', null, 'Formspree Form'),
					el('div', null,
						form_id
							? `Form ID: ${form_id}`
							: 'Enter your Formspree Form ID in the settings panel →'
					)
				)
			);
		},

		save() {
			return null;
		}
	});

})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components);