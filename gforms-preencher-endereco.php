<?php 

/**
 *
 * Plugin Name: Gravity Forms - Autopreenchimento de Endereço
 * Description: Preenchimento automático de campos de endereço baseado no CEP informado.
 * Author: John (João Elton Moreto)
 * Author URI: https://www.q11.com.br/digital
 * Version: 1.0.0
 * 
 */

if (!ABSPATH) exit;

include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

if ( is_plugin_active('gravityforms/gravityforms.php') ) {

	/**
	 * Function init plugin
	**/
	function gf_autocep_init(){
		add_action( 'wp_enqueue_scripts', 'gf_autocep_do_enqueue_scripts' );
	}
	add_action( 'plugins_loaded', 'gf_autocep_init' , 20 );

	/**
	 * Function enqueue script
	 * @version 1.0 
	**/
	function gf_autocep_do_enqueue_scripts() {
		wp_enqueue_script( 'gf_mf-app', plugin_dir_url( __FILE__ ) . 'assets/js/gf-cep-autofill.js?ver=' . filemtime( plugin_dir_path( __FILE__ ) . 'assets/js/gf-cep-autofill.js' ), array('jquery'), null, true );
	}
	add_action( 'wp_enqueue_scripts', 'gf_autocep_do_enqueue_scripts' );

	

} else {

	function pls_activate_gforms_end() {
	    ?>
	    <div class="error notice">
	        <p><?php _e( 'Por favor, instale ou ative o Gravity Forms!', 'my_plugin_textdomain' ); ?></p>
	    </div>
	    <?php
	}
	
	add_action( 'admin_notices', 'pls_activate_gforms_end' );
}


?>
